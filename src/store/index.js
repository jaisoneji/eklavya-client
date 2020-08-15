import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token') || null
  },
  getters:{
    isLoggedIn(state){
      return state.token !== null 
    }
  },
  mutations: {
    setToken(state,token){
      state.token=token
    }
  },
  actions: {
    LOGIN(context,credentials){
      return new Promise((resolve,reject)=>{
        Axios.post('https://eklavya-server.herokuapp.com/API/auth/signin',{
          email:credentials.email,
          password:credentials.password
        })
        .then(response => {
          localStorage.setItem('token',response.data.token)
          context.commit('setToken',response.data.token)
          console.log(response)
          resolve(response)
          
        })
        .catch(error=>{
          console.log(error)
          reject(error)

        })
      })
    }
  },
  modules: {
  }
})
