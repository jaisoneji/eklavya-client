import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import Axios from 'axios'

Vue.use(Vuex)
Vue.use(VueCookies)
export default new Vuex.Store({
  state: {
    theme:localStorage.getItem('theme') || 'theme-light',
    user:{
      name:localStorage.getItem("name") || '',
      email:localStorage.getItem("email") || '',
      role:localStorage.getItem("role") || '',
      method:localStorage.getItem("method")||'',
      token:VueCookies.get("token") || null,
    },
    profileComplete:{
      isCompleted: localStorage.getItem("isCompleted") || false,
      complete: localStorage.getItem("complete") || 0
    }
    
  },
  getters:{
    isLoggedIn(state){
      return state.token !== null 
    },
    getUserDetails(state){
      return state.user
    },
    getMode(state){
      return state.theme
    }
    
  },
  mutations: {
    setToken(state,token){
      state.user.token=token
    },
    setUserDetails(state,{name,email,role,method}){
      state.user.name=name,
      state.user.email=email,
      state.user.role=role,
      state.user.method=method,
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("role",role)
      localStorage.setItem("method",method)
    },
    setMode(state){
      state.theme = state.theme === 'theme-light' ? 'theme-dark':'theme-light'
      localStorage.setItem('theme',state.theme)
    },
    setProfileDetails(state,{status,completed}){
      state.profileComplete.isCompleted=status
      state.profileComplete.complete=completed
      localStorage.setItem("isProfileCompleted",status)
      localStorage.setItem("completed",completed)
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
          let expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
          VueCookies.set("token",response.data.token,expires);
          context.commit('setToken',response.data.token)
          context.commit('setUserDetails',response.data.user_data)
          context.commit('setProfileDetails',response.data.user_data.profileCompletion)
          console.log(response.data.user_data)
          resolve(response)
          
        })
        .catch(error=>{
          console.log("Login error"+JSON.stringify(error.message))
          reject(error)

        })
        .finally(()=>{
          
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
    },
    TOGGLEMODE(context){
      context.commit('setMode')
    }
  },
  modules: {
  }
})
