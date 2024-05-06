<template>
<div>
    <h2>
        Instrucciones:

    </h2>
    <ul>
        <li> Crear repositorio en github o gitlab público</li>
        <li> Crea un nuevo proyecto de Vue.js utilizando Vue CLI o Vite.</li>
        <li> Crea los componentes mencionados en los requisitos.</li>
        <li> Implementa la funcionalidad de obtención de opciones de créditos hipotecarios desde una API externa.</li>
        <li> Agrega la funcionalidad para calcular las cuotas mensuales según los datos ingresados por el usuario.</li>
        <li> Muestra el resultado del cálculo en el componente LoanResult.</li>
        <li> Permite al usuario seleccionar una opción predefinida de crédito hipotecario y carga los datos en el formulario.</li>
        <li> Aplica estilos CSS para mejorar la apariencia de la interfaz de usuario.</li>
        <li> Implementa un skeleton loader mientras se obtienen las opciones de créditos desde la API externa.</li>
        <li> Realiza pruebas exhaustivas para garantizar que la aplicación funcione correctamente.</li>
        <li> Sube tu solución a un repositorio de GitHub y proporciona el enlace.</li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style>
h2{
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
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
</style>
