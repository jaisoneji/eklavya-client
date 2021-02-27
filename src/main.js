import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import queryString from 'query-string'

// import Axios from 'axios'
import '@/assets/css/main.css'
import './registerServiceWorker'
import GAuth from "vue-google-oauth2";
import VueCookies from 'vue-cookies'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// date time picker
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
// for grid 
import Grid from 'gridjs-vue'


Vue.config.productionTip = false


// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }


const gauthOption = {
  clientId: "426192843722-40g87d9749a3s2hf8nra76ull3a5fk71.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};

Vue.use(GAuth, gauthOption);
Vue.use(VueCookies)
Vue.use(VueSidebarMenu)
Vue.use(Datetime)
Vue.use(Grid)


new Vue({
  router,
  store,
  queryString,
  render: h => h(App)
}).$mount('#app')
