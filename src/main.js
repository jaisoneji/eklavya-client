import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import queryString from 'query-string'
// import Axios from 'axios'
import '@/assets/css/main.css'
import './registerServiceWorker'

Vue.config.productionTip = false

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

new Vue({
  router,
  store,
  queryString,
  render: h => h(App)
}).$mount('#app')
