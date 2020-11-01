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
@import "./assets/_variables.scss";
@import "./assets/_globals.scss";
.app {
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  &__content {
    width: 90vw;
    max-width: $content-width;
  }
}
@media only screen and (min-width: 900px) {
  .app {
    padding: 0 0 1px;
    &__content {
      margin: 0 auto;
      min-height: calc(100vh - 3.4rem);
      display: grid;
      place-content: center;
    }
  }
}
</style>