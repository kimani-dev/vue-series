// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

// components
import AppCounter from './components/AppCounter.vue';

const app = createApp(App);

app.component('app-counter', AppCounter);

app.mount('#app');
