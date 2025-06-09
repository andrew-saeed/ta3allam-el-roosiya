import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LessonView from '@/views/LessonView.vue'
import Alphapet from '@/views/Alphabet/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: () => import('./views/StartView.vue'),
    },
    {
      path: '/alphabet',
      name: 'alphabet',
      component: LessonView,
      children: [
        {path: '', name: 'lesson', component: Alphapet},
        {path: 'quiz', name: 'quiz', component: () => import('./views/Alphabet/Quiz.vue')}
      ]
    },
  ],
  linkActiveClass: 'bg-blue-400 text-surface-50 shadow-[1px_1px_4px_1px_rgba(18,18,23,0.3)]',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
