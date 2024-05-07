# Vue Challenge 2024 🏡💰

¡Bienvenido al emocionante desafío de Vue! 🚀 En este desafío, tendrás la oportunidad de crear un increíble simulador de crédito hipotecario utilizando el poderoso framework Vue.js. 💪

Imagina que eres un mago de las finanzas 🧙‍♂️ y tu misión es ayudar a las personas a hacer realidad sus sueños de tener su propia casa. 🏠 Con tu habilidad en Vue.js, crearás una aplicación que les permitirá ingresar información como el monto del préstamo, la tasa de interés y el plazo, y ¡voilà! 🪄 Les mostrarás el resultado del cálculo de las cuotas mensuales.

Pero eso no es todo, ¡también te conectarás con una API mágica! 🌟 Esta API te proporcionará datos de créditos hipotecarios para que puedas mostrar opciones predefinidas a los usuarios y facilitarles la vida. 😊

## Instrucciones 📝

<ul>
  <li>Crea un nuevo repositorio público donde puedas mostrar tu talento al mundo. 🌍</li>
  <li>Utiliza el asombroso Vue 3 con Vite para configurar tu proyecto dentro del repositorio. ⚡</li>
  <li>Crea los componentes <code>Form</code>, <code>Result</code> y <code>Card</code> para darle vida a tu aplicación. 🔧</li>
</ul>

### Componente Form 📝

En este componente, tendrás que crear una fórmula mágica ✨ que tome los datos proporcionados por el usuario y calcule el dividendo mensual. Luego, multiplica el resultado por 4 para obtener el sueldo requerido. ¡Así de fácil! 😄

El componente debe recibir la siguiente información:

<ul>
  <li>Valor Propiedad (en UF) 🏠</li>
  <li>Pie (en UF) 💰</li>
  <li>Tasa de Interés (por defecto 5%) 📈</li>
  <li>Plazo (en años) 📅</li>
</ul>

### Componente Result 📊

Aquí es donde mostrarás el resultado del cálculo del dividendo mensual y el sueldo requerido. ¡Que los números hablen por sí mismos! 💬

### Consumo de API 🌐

¡Prepárate para conectarte con la API mágica! 🔮 Esta API te brindará información sobre créditos bancarios y tiene los siguientes parámetros:

<ul>
  <li><code>valorPropiedad</code> (Monto en UF) 💰</li>
  <li><code>Pie</code> (10 a 100%) 🍰</li>
  <li><code>Tiempo</code> (5 a 30 años) ⏳</li>
  <li><code>Dfl2</code> (true/false) ✅❌</li>
</ul>

La API te devolverá todos los créditos hipotecarios de los bancos, incluyendo la tasa de interés, el dividendo, los costos legales y el nombre del banco. ¡Es como tener un asesor financiero a tu disposición! 🤵💼

### Componente Card 🃏

Muestra los resultados de la API en componentes <code>Card</code> de forma dinámica, creando una card por cada resultado. ¡Haz que se vea mágico! ✨

### Despliegue 🚀

Sube tu proyecto a GitHub y despliégalo en Vercel o Cloudflare para que el mundo pueda ver tu increíble creación. 🌍🎉

## Consideraciones 🤔

<ul>
  <li>Puedes utilizar CSS, Bootstrap o Tailwind para darle estilo a tu aplicación. ¡Haz que se vea espectacular! 🎨</li>
  <li>Utiliza Axios o Fetch para consumir la API. También puedes configurar el consumo de la API dentro de un componente o crear un servicio dedicado. ¡Tú decides! 🤓</li>
  <li>Utiliza metodologías de clean code y organiza tu código de manera legible y fácil de comprender. ¡Que tu código brille! ✨</li>
  <li>Todas las variables y funciones deben estar en inglés y tener comentarios explicativos simples y precisos. ¡Haz que tu código hable por sí mismo! 💬</li>
</ul>

## Recursos 📚

<ul>
  <li>Página oficial de Vue.js: <a href="https://vuejs.org" target="_blank">https://vuejs.org</a> 🌐</li>
  <li>API para consultar créditos hipotecarios: 🔍
    <ul>
      <li>Ruta GET: <code>https://api.hipotecarios.info/creditos/?valorPropiedad=2000&Pie=30&Tiempo=20&Dfl2=true</code> 🌐</li>
      <li>Esta API no requiere apikey, solo necesitas enviar los parámetros mencionados anteriormente. Ten en cuenta los parámetros del API: valorPropiedad (Monto en UF) | Pie (10 a 100%) | Tiempo (5, 30 años) | Dfl2 (true / false) 📝</li>
    </ul>
  </li>
  <li>Ejemplos de simuladores de créditos hipotecarios: 🏠💰
    <ul>
      <li><a href="https://besalcoinmobiliaria.cl/Los-leones" target="_blank">https://besalcoinmobiliaria.cl/Los-leones</a> 🦁</li>
      <li><a href="https://isacorp.cl/dubl%C3%A9-almeyda/" target="_blank">https://isacorp.cl/dubl%C3%A9-almeyda/</a> 🏙️</li>
    </ul>
  </li>
</ul>

¡Buena suerte con el desafío! 🍀 Estoy seguro de que crearás algo asombroso. 🌟 ¡Que la fuerza de Vue esté contigo! 💪😄
