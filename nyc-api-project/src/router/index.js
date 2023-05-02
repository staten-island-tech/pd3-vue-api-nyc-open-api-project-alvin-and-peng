import { createRouter, createWebHistory } from 'vue-router'
import apiData from '../views/apiData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apiData',
      component: apiData
    },
    {
      path: '/apiData',
      name: 'ApiData',
      component: () => import('../views/apiData.vue')
    },

    {
      path: '/pieView',
      name: 'pieView',
      component: () => import('../views/pieView.vue')
    },
    {
      path: '/BarView',
      name: 'BarView',
      component: () => import('../views/BarView.vue')
    }
  ]
})

export default router
