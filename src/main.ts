// Import
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/styles/index.css';
import clickOutsideDirective from '@/directives/click-outside.ts';
import App from './App.vue';

// Constants
const pinia = createPinia();
const app = createApp(App);

// App
app.use(pinia);
app.directive('click-outside', clickOutsideDirective);
app.mount('#app');
