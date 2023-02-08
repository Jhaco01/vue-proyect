import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView'
import PastOrderView from '../views/PastOrderView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductView
  },
  {
    path: '/past-orders',
    name: 'Past Orders',
    component: PastOrderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
