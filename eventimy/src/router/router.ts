import { createRouter, createWebHistory, RouterView } from 'vue-router'

/**
 * Section for Page Import.
 */
import Home from '../pages/home/Home.vue';
import Login from '../pages/authentication/Login.vue';
import Signup from '../pages/authentication/Signup.vue';

export const routerHistory = createWebHistory();
export const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        // Home page router rules.
        { path: '/home', redirect: '/' },
        { path: '/', component: Home },

        // Authentication page router rules.
        { path: '/login', component: Login},
        { path: '/signup', component: Signup},
    ]
});