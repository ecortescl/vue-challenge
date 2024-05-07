<template>
  <div>
    <h2>
      Instrucciones:

    </h2>
    <ul>
      <li>Crea un nuevo repositorio público.</li>
      <li>Crea un proyecto Vue 3 con Vite y configúralo dentro del repositorio.</li>
      <li>Crea los componentes <code>Form</code>, <code>Result</code> y <code>Card</code>.</li>
    </ul>

    <h3>Componente Form</h3>
    <p>Crea una fórmula que tome los datos anteriores y calcule el dividendo mensual. Luego, multiplica el resultado por
      4 para obtener el sueldo requerido.</p>
    <p>debe recibir la siguiente información:</p>
    <ul>
      <li>Valor Propiedad (en UF)</li>
      <li>Pie (en UF)</li>
      <li>Tasa de Interés (por defecto 5%)</li>
      <li>Plazo (en años)</li>
    </ul>

    <h3>Componente Result</h3>
    <h4>Mostrar el Resultado del Cálculo del Dividendo Mensual y Sueldo Requerido</h4>

    <h3>Consumo de API</h3>
    <p>Debes consumir nuestra API que obtiene información de créditos bancarios. La API tiene los siguientes parámetros:
    </p>
    <ul>
      <li><code>valorPropiedad</code> (Monto en UF)</li>
      <li><code>Pie</code> (10 a 100%)</li>
      <li><code>Tiempo</code> (5 a 30 años)</li>
      <li><code>Dfl2</code> (true/false)</li>
    </ul>
    <p>La API devolverá todos los créditos hipotecarios de los bancos, incluyendo la tasa de interés, el dividendo, los
      costos legales y el nombre del banco.</p>

    <h3>Componente Card</h3>
    <p>Muestra los resultados de la API en componentes <code>Card</code> de forma dinámica, creando una card por cada
      resultado.</p>

    <h3>Despliegue</h3>
    <p>Sube el proyecto a GitHub y despliégalo en Vercel o Cloudflare.</p>
  </div>
</template>

<script>
export default {

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
</style>
