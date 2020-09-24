import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import ProfileError from '../components/ProfileError.vue'
import EmailError from '../components/EmailError.vue'
import Dash from '../components/Dash.vue'
import store from '@/store'
import VueCookies from 'vue-cookies'
import Repository from '../components/Repository'
import Collapse from '../components/Collapse'

// http://localhost:8000/GoogleLoader
Vue.use(VueRouter)
  
  const routes = [
    
   
    {
      path:'/Repository',
      name:'Repository',
      component: Repository
    },
    {
      path:'/Dash',
      name:'Dash',
      component: Dash
    },
    {
      path:'/Dashboard',
      name:'Dashboard',
      component: Dashboard,
      children:[
        {
          path:'/Collapse',
          name:'Collapse',
          component: Collapse
        },
      ],
      beforeEnter(to, from ,next){
          if(store.getters.getProfileStatus){
            console.log(store.getters.getProfileStatus)
            next()
          }
          else{
            next({
              name:"Profile"
            })
          }
      }

    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter(to,from,next){
      if(VueCookies.isKey("token")){
        next({
          name:"Dashboard"
        })
      }else{
        next()
      }
    }
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
      component: Profile,
      beforeEnter(to,from,next){
        if(VueCookies.isKey("token")){
          next()
        }else{
          next({
            name:'Login'
          })
        }
      }

    },
    {
      path:'/ProfileError',
      name:'ProfileError',
      component: ProfileError
    },
    {
      path:'/EmailError',
      name:'EmailError',
      component: EmailError
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
