import { createRouter, createWebHistory } from 'vue-router'

const Home = import('views/home/home')
const Cart = import('views/cart/cart')
const Category = import('views/category/category')
const Profile = import('views/profile/profile')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
