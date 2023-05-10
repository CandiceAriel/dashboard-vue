import { createRouter, createWebHistory} from 'vue-router';

import HomeView from '../view/Home.vue'
import KanbanView from '../view/Kanban.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView, props: true },
  { path: '/kanban', name: 'Kanban', component: KanbanView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;