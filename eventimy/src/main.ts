import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router, routerHistory } from './router/router'

import App from "./App.vue";

import "./assets/basic.css";

// App Initialization.
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');