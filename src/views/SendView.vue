<template>
  <div class="challenge-form">
    <h2>Subir tu Desafío</h2>
    <p class="countdown">Tiempo restante: {{ countdown }}</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input type="tel" id="phone" v-model="formData.phone" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="repository">Enlace del repositorio:</label>
        <input type="url" id="repository" v-model="formData.repository" required>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        repository: ''
      },
      countdown: ''
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAILJS_USER_ID,
            template_params: {
              to_email: 'esteban@quiebre.cl',
              from_name: this.formData.name,
              from_email: this.formData.email,
              
                name: this.formData.name,
                phone: this.formData.phone,
                email: this.formData.email,
                link: this.formData.repository
              
            }
          })
        });

        if (response.ok) {
          await Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El correo electrónico se ha enviado exitosamente.',
            background: '#1e1e1e',
            color: '#fff',
            confirmButtonColor: '#007bff'
          });
          // Resetear los campos del formulario después de enviar
          this.formData = {
            name: '',
            phone: '',
            email: '',
            repository: ''
          };
        } else {
          await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ha ocurrido un error al enviar el correo electrónico.',
            background: '#1e1e1e',
            color: '#fff',
            confirmButtonColor: '#007bff'
          });
        }
      } catch (error) {
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al enviar el correo electrónico.',
          background: '#1e1e1e',
          color: '#fff',
          confirmButtonColor: '#007bff'
        });
      }
    },
    updateCountdown() {
      const targetDate = new Date('2024-05-10T23:59:59');
      const currentDate = new Date();
      const diff = targetDate - currentDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
};
</script>

<style scoped>
.challenge-form {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 5px;
  color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.countdown {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffd700;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  background-color: #2b2b2b;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
}

button {
  width: 100%;
  background: #41B883;
  border-radius: 5px;
  padding:10px;
  color:#000;
  font-weight: bolder;
  margin-bottom:50px;
  cursor: pointer;
}

@media (max-width: 1023px) {
  .challenge-form {
    width: 100%;
  }
}
</style>