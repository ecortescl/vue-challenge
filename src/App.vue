<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Whatsapp from "./components/Whatsapp.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav style="text-align: center">
        <RouterLink to="/">Indicaciones</RouterLink>
        <RouterLink to="/consideraciones">Consideraciones</RouterLink>
        <RouterLink to="/recursos">Recursos</RouterLink>
        <RouterLink class="btn-challenge" to="/enviar"
          >Enviar Desafio</RouterLink
        >
        <RouterLink class="btn-participantes" to="/participantes"
          >Participantes</RouterLink
        >
      </nav>
    </div>
  </header>
  <Whatsapp phoneNumber="+56950073523"></Whatsapp>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.btn-challenge {
  width: 100%;
  background: #41b883;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px;
  color: #000 !important;
  font-weight: bolder;
  cursor: pointer;
  margin-top: 10px;
}

.btn-participantes {
  width: 100%;
  background: #3b7eda;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px;
  color: #000 !important;
  font-weight: bolder;

  cursor: pointer;
  margin-top: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}



nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    text-align: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
@media (max-width: 1023px) {
  .btn-challenge {
    margin-top: 10px;
  }
}
</style>
