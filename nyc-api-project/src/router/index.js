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
      path: '/BarView/',
      name: 'BarView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BarView.vue')
    }
  ]
})

export default router
