import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ApiData',
      component: () => import('/views/apiData.vue')
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
