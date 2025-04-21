import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubscribeView from '../views/SubscribeView.vue'
import AuthView from '../views/AuthView.vue'
import DeliveryView from '../views/DeliveryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: SubscribeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/delivery',
    name: 'auth',
    component: DeliveryView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
