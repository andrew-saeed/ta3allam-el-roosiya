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
  linkActiveClass: 'bg-white-mute'
})

export default router
