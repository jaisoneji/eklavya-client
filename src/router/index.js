import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GoogleLoader from '../components/GoogleLoader.vue'
import Register from '../components/Register.vue'
import Loader from '../components/Loader.vue'

// http://localhost:8000/GoogleLoader
Vue.use(VueRouter)

  const routes = [
    {
      path:'/GoogleLoader',
      name:'GoogleLoader',
      component: GoogleLoader
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Loader',
    name: 'Loader',
    component: Loader
  },
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
