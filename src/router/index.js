import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/activity',
      name:'activity',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path:'/unique',
      name:'unique',
      component: () => import('../views/UniqueView.vue')
    },
    {
      path:'/mission',
      name:'mission',
      component: () => import('../views/MissionView.vue')
    },
  ]
})

export default router
