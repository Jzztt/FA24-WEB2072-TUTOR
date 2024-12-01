import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import FormCreateView from '@/views/FormCreateView.vue'
import FormUpdateView from '@/views/FormUpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: FormCreateView,
    },

    {
      path: '/student-detail/:id',
      name: 'student-detail',
      component: StudentDetailView,
    },
    {
      path: '/student-update/:id',
      name: 'student-update',
      component: FormUpdateView,
    }

  ],
})

export default router
