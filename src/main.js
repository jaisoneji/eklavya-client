import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import queryString from 'query-string'
// import Axios from 'axios'
import '@/assets/css/main.css'
import './registerServiceWorker'
import GAuth from "vue-google-oauth2";

Vue.config.productionTip = false

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }
const gauthOption = {
  clientId: process.env.VUE_APP_CLIENT_ID,
  scope: "profile email",
  prompt: "select_account",
};

Vue.use(GAuth, gauthOption);


new Vue({
  router,
  store,
  queryString,
  render: h => h(App)
}).$mount('#app')
