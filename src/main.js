import { createApp } from 'vue'
import App from './App.vue'
import ListaProductos from './components/ListaProductos.vue';

createApp(App).mount('#app')
App.component('ListaProductos', ListaProductos);