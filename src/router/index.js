import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

// http://localhost:8000/GoogleLoader
Vue.use(VueRouter)
mode: 'history'
  const routes = [
    
    {
      path:'/Dashboard',
      name:'Dashboard',
      component: Dashboard
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
      path:'/Login',
      name:'Login',
      component: Login
    }
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
  routes
})

export default router
