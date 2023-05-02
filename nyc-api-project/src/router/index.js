import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pieView/',
      name: 'pieView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pieView.vue')
    },

    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
