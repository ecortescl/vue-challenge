<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">

    <h1 class="green"> Vue challenge </h1>
    <h4>
      <p style="text-align: justify;">En este desafío, el candidato deberá crear un simulador de crédito hipotecario
        utilizando Vue.js. La aplicación permitirá al usuario ingresar información como el monto del préstamo, la tasa
        de interés y el plazo, y mostrará el resultado del cálculo de las cuotas mensuales. Además, se consumirá una API
        que proporciona datos de créditos hipotecarios para mostrar opciones predefinidas al usuario.</p>
    </h4>
  </div>
</template>

<style>
h1 {

  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 60px;
  font-weight: bolder;
  text-align: center;

}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}
</style>
