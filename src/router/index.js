import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/infoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/requerimientos',
      name: 'requerimientos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/requirementsView.vue')
    },
    {
      path: '/criterios',
      name: 'criterios',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/standarView.vue')
    },
    {
      path: '/recursos',
      name: 'recursos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/filesView.vue')
    }
  ]
})

export default router
