import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LessonView from '@/views/LessonView.vue'
import alphapet from '@/views/alphabet/index.vue'

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
      component: () => import('../views/StartView.vue'),
    },
    {
      path: '/alphabet',
      name: 'alphabet',
      component: LessonView,
      children: [
        {path: '', name: 'lesson', component: alphapet},
        {path: 'quiz', name: 'quiz', component: () => import('../views/alphabet/quiz.vue')}
      ]
    },
  ],
  linkActiveClass: 'bg-blue-400 text-surface-50 shadow-[1px_1px_4px_1px_rgba(18,18,23,0.3)]'
})

export default router
