import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {  
    path: '/view1',
    name: 'View1',
    component: () => import(/* webpackChunkName: "view1" */ '../views/View1.vue')
  },
  {  
    path: '/view2',
    name: 'View2',
    component: () => import(/* webpackChunkName: "view2" */ '../views/View2.vue')
  },
  {
    path: '/view3',
    name: 'View3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "view3" */ '../views/View3.vue')
  }
  ,
  {
    path: '/view4',
    name: 'View4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "view4" */ '../views/View4.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
