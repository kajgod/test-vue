<template>
  <div class="app">
    <Navigation />
    <main class="app__content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./assets/_globals.scss";
</style>