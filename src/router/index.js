import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Categori from '../views/Categori.vue'
import Brand from '../views/Brand.vue'
import DetailProduct from '../views/DetailProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path : '/login',
      name : 'login',
      component : Login,
    },
    {
      path : '/product',
      name : 'product',
      component : Product,
    },
    {
      path : '/categori',
      name : 'categori',
      component : Categori,
    },
    {
      path : '/brand',
      name : 'brand',
      component : Brand,
    },
    {
      path : '/product/detailproduct/:slug',
      name : 'Detailproduct',
      component : DetailProduct,
      props : true
    },
  ]
})

export default router
