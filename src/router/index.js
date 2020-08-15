import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import GoogleLoader from '../components/GoogleLoader.vue'

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
  path:'/login',
  name:'Login',
  component: Login
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
