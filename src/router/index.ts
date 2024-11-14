import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/StartView.vue'),
    },
  ],
  linkActiveClass: 'bg-blue-400 text-surface-50 shadow-[1px_1px_4px_1px_rgba(18,18,23,0.3)]'
})

export default router
