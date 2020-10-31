import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactUs from "../views/ContactUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "Contact us",
    component: ContactUs,
  },
];

const router = new VueRouter({
  base: "./",
  routes,
});

export default router;
