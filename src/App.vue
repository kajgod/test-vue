<template>
  <div class="app">
    <nav class="app__navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/contact-us">Contact us</router-link>
    </nav>
    <section class="app__content">
      <router-view />
    </section>
    <footer class="app__footer">Footer</footer>
  </div>
</template>
