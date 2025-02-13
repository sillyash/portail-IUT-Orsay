import { createRouter, createWebHistory } from 'vue-router'
import Portail from '../views/Portail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Portail,
    },
  ],
})

export default router
