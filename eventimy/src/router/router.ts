import { createRouter, createWebHistory, RouterView } from "vue-router";

/**
 * Section for Page Import.
 */
import Home from "../pages/home/Home.vue";

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    // Home page router rules.
    { path: "/home", redirect: "/" },
    { path: "/", component: Home },
  ],
});
