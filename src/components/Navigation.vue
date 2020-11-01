<template>
  <nav class="app__navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/contact-us">Contact us</router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.app__navigation {
  background: $dark;
  text-align: center;
  font-size: 0px;
  height: 3.4rem;
  a {
    display: inline-block;
    font-size: 1.15rem;
    line-height: 1.4rem;
    color: $light;
    padding: 1rem;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
    &:hover {
      background-color: $highlight;
      color: $black;
    }
    &.router-link-exact-active {
      background-color: $middle;
      color: $white;
    }
  }
}
</style>