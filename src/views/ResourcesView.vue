<template>
  <div>
    <h3>Material</h3>
    <ul>
      <li>Página oficial de Vue.js: <a href="https://vuejs.org" target="_blank">https://vuejs.org</a></li>
      <li>API para consultar créditos hipotecarios:
        <ul>
          <li>Ruta GET:
            <code>https://api.hipotecarios.info/creditos/?valorPropiedad=2000&Pie=30&Tiempo=20&Dfl2=true</code>
          </li>
          <li>Esta API no requiere apikey, solo necesitas enviar los parámetros mencionados anteriormente. considerar
            los parametros del api:
            valorPropiedad (Monto en UF) |
            Pie (10 a 100%) |
            Tiempo (5, 30 años) |
            Dfl2 (true / false)

          </li>

        </ul>

      </li>
      <li>Ejemplos de simuladores de créditos hipotecarios:
        <ul>
          <li><a href="https://besalcoinmobiliaria.cl/Los-leones"
              target="_blank">https://besalcoinmobiliaria.cl/Los-leones</a></li>
          <li><a href="https://isacorp.cl/dubl%C3%A9-almeyda/"
              target="_blank">https://isacorp.cl/dubl%C3%A9-almeyda/</a></li>
        </ul>
      </li>
    </ul>


  </div>
</template>

<script>
export default {

}
</script>

<style></style>