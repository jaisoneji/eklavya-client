import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import Profile_error from '../components/Profile_error.vue'
import Email_error from '../components/Email_error.vue'

// http://localhost:8000/GoogleLoader
Vue.use(VueRouter)
  
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
    },
    {
      path:'/Profile',
      name:'Profile',
      component: Profile
    },
    {
      path:'/Profile_error',
      name:'Profile_error',
      component: Profile_error
    },
    {
      path:'/Email_error',
      name:'Email_error',
      component: Email_error
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
