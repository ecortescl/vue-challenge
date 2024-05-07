<template>
  <div>
    <h2>Instrucciones:</h2>
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(0)">
          <h3>Requerimientos</h3>
          <span class="accordion-icon" :class="{ 'rotate': openedAccordions[0] }">&#9660;</span>
        </div>
        <div class="accordion-content" v-show="openedAccordions[0]">
          <ul>
            <li>Crea un nuevo repositorio público.</li>
            <li>Crea un proyecto Vue 3 con Vite y configúralo dentro del repositorio.</li>
            <li>Crea los componentes <code>Form</code>, <code>Result</code> y <code>Card</code>.</li>
          </ul>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(1)">
          <h3>Componente Form</h3>
          <span class="accordion-icon" :class="{ 'rotate': openedAccordions[1] }">&#9660;</span>
        </div>
        <div class="accordion-content" v-show="openedAccordions[1]">
          <p>Crea una fórmula que tome los datos anteriores y calcule el dividendo mensual. Luego, multiplica el
            resultado por 4 para obtener el sueldo requerido.</p>
          <p>debe recibir la siguiente información:</p>
          <ul>
            <li>Valor Propiedad (en UF)</li>
            <li>Pie (en UF)</li>
            <li>Tasa de Interés (por defecto 5%)</li>
            <li>Plazo (en años)</li>
          </ul>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(2)">
          <h3>Componente Result</h3>
          <span class="accordion-icon" :class="{ 'rotate': openedAccordions[2] }">&#9660;</span>
        </div>
        <div class="accordion-content" v-show="openedAccordions[2]">
          <h4>Mostrar el Resultado del Cálculo del Dividendo Mensual y Sueldo Requerido</h4>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(3)">
          <h3>Consumo de API</h3>
          <span class="accordion-icon" :class="{ 'rotate': openedAccordions[3] }">&#9660;</span>
        </div>
        <div class="accordion-content" v-show="openedAccordions[3]">
          <p>Debes consumir nuestra API que obtiene información de créditos bancarios. La API tiene los siguientes
            parámetros:</p>
          <ul>
            <li><code>valorPropiedad</code> (Monto en UF)</li>
            <li><code>Pie</code> (10 a 100%)</li>
            <li><code>Tiempo</code> (5 a 30 años)</li>
            <li><code>Dfl2</code> (true/false)</li>
          </ul>
          <p>La API devolverá todos los créditos hipotecarios de los bancos, incluyendo la tasa de interés, el
            dividendo, los costos legales y el nombre del banco.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(4)">
          <h3>Componente Card</h3>
          <span class="accordion-icon" :class="{ 'rotate': openedAccordions[4] }">&#9660;</span>
        </div>
        <div class="accordion-content" v-show="openedAccordions[4]">
          <p>Muestra los resultados de la API en componentes <code>Card</code> de forma dinámica, creando una card por
            cada resultado.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(5)">
          <h3>Despliegue</h3>
          <span class="accordion-icon" :class="{ 'rotate': openedAccordions[5] }">&#9660;</span>
        </div>
        <div class="accordion-content" v-show="openedAccordions[5]">
          <p>Sube el proyecto a GitHub y despliégalo en Vercel o Cloudflare.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedAccordions: [false, false, false, false, false, false]
    }
  },
  methods: {
    toggleAccordion(index) {
      this.openedAccordions = this.openedAccordions.map((item, i) => i === index ? !item : false)
    }
  }
}
</script>

<style>
h2 {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: bolder;
}

h3 {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  font-weight: bolder;
}

ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  position: relative;
  margin-bottom: 10px;
}

li::before {
  content: "•";
  position: absolute;
  left: -20px;
  font-size: 16px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.accordion {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #ccc;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #181818;
}

.accordion-icon {
  transition: transform 0.3s ease;
}

.accordion-icon.rotate {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 10px;
  background-color: #181818;
  max-height: 1000px;
  /* Ajusta este valor según tus necesidades */
  overflow: hidden;
  transition: max-height 0.3s ease;
  border: 1px solid #42d392;
}

.accordion-content.open {
  max-height: 1000px;
  /* Ajusta este valor según tus necesidades */
}
</style>