import { createRouter, createWebHistory} from 'vue-router';

import HomeView from '../view/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;