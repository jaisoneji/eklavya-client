import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      name:'',
      email:'',
      role:'',
      token:localStorage.getItem('token') || null,
      
    }
    
  },
  getters:{
    isLoggedIn(state){
      return state.token !== null 
    },
    getUserDetails(state){
      return state.user
    }
  },
  mutations: {
    setToken(state,token){
      state.user.token=token
    },
    setUserDetails(state,{name,email,role}){
      state.user.name=name,
      state.user.email=email,
      state.user.role=role
    }
  },
  actions: {
    // This action is used for Sign in
    LOGIN(context,credentials){
      return new Promise((resolve,reject)=>{
        Axios.post('https://eklavya-server.herokuapp.com/API/auth/signin',{
          email:credentials.email,
          password:credentials.password
        })
        .then(response => {
          localStorage.setItem('token',response.data.token)
          context.commit('setToken',response.data.token)
          context.commit('setUserDetails',response.data)
          console.log(response)
          resolve(response)
          
        })
        .catch(error=>{
          console.log("Login error"+JSON.stringify(error.message))
          reject(error)

        })
      })
    },
    // This action is used for registration
    REGISTER(context,payload){
      return new Promise((resolve,reject)=>{
        let data = JSON.stringify({
          name:payload.name,
          email:payload.email,
          password:payload.password
        })
        console.log(payload)
        Axios.post('https://eklavya-server.herokuapp.com/API/auth/signup',data,
        {
        headers:{
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
        }
        )
        .then(response => {
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
