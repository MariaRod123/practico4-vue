
import { createRouter, createWebHistory } from 'vue-router';
import BuscadorCoordenadas from '@/views/BuscadorCoordenadas.vue';
import ListaPaises from '@/views/ListaPaises.vue';

const routes = [
  {
    path: '/',
    name: 'Buscador',
    component: BuscadorCoordenadas,
  },
  {
    path:'/paises',
    name:'Lista Paises',
    component: ListaPaises,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

