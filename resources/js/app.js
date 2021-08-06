require('./bootstrap');

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
// import { createStore } from 'vuex';
import "tailwindcss/tailwind.css";
import store from "./store";

axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");