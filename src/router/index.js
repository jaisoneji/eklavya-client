import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TeachersDashboard from '../views/TeachersDashboard.vue'
import Login from '../components/AuthenticationComponents/Login.vue'
import Register from '../components/AuthenticationComponents/Register.vue'
import Profile from '../components/AuthenticationComponents/Profile.vue'
import ProfileError from '../components/AuthenticationComponents/ProfileError.vue'
import EmailError from '../components/EmailError.vue'
import SideBar from '../components/TeachersComponents/SideBar.vue'
import Schedule from '../components/TeachersComponents/Schedule.vue'
import MCQForm from '../components/TeachersComponents/MCQForm.vue'
import Welcome from '../components/TeachersComponents/Welcome.vue'
import StudentDataLive from '../components/TeachersComponents/StudentDataLive.vue'

// import Dummy from '../components/TeachersComponents/Dummy.vue'

import store from '@/store'
import VueCookies from 'vue-cookies'
import Scrape from '../components/TeachersComponents/Scrape.vue'
import Collapse from '../components/TeachersComponents/Collapse'
import ProfilePic from '../components/AuthenticationComponents/ProfilePic'


// http://localhost:8000/GoogleLoader
Vue.use(VueRouter)
  
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (VueCookies.isKey("token")) {
        next({
          path: "TeachersDashboard/",
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/ProfilePic",
    name: "ProfilePic",
    component: ProfilePic,
  },
  
  {
    path: "/MCQForm",
    name: "MCQForm",
    component: MCQForm,
    beforeEnter(to, from, next) {
      if (VueCookies.isKey("token")) {
        next();
      } else {
        next({
          name:"Home"
        });
      }
    },
  },
  {
    path: "/Schedule",
    name: "Schedule",
    component:Schedule,
  },
  {
    path: "/Scrape",
    name: "Scrape",
    component: Scrape,
  },
  {
    path: "/SideBar",
    name: "SideBar",
    component: SideBar,
  },
  {
    path: "/TeachersDashboard",
    name: "TeachersDashboard",
    component: TeachersDashboard,
    children: [
      {
        path: "/",
        name: "Welcome",
        component: Welcome,
      },
      {
        path: "/Collapse",
        name: "Collapse",
        component: Collapse,
      },
      {
        path: "/StudentDataLive",
        name: "StudentDataLive",
        component: StudentDataLive,
      },
    ],
    beforeEnter(to, from, next) {
      if(VueCookies.get("token")){
        if (store.getters.getVerifiedStatus) {
          if (store.getters.getProfileStatus) {
            console.log(store.getters.getProfileStatus);
            next();
          } else {
            next({
              name: "Profile",
            });
          }
        } else {
          next({
            name: "EmailError",
          });
        }
      }
      else{
        next({
          name:"Home"
        })
      }
    },
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
    beforeEnter(to, from, next) {
      if (VueCookies.isKey("token")) {
        next();
      } else {
        next({
          name: "Login",
        });
      }
    },
  },
  {
    path: "/ProfileError",
    name: "ProfileError",
    component: ProfileError,
  },
  {
    path: "/EmailError",
    name: "EmailError",
    component: EmailError,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
