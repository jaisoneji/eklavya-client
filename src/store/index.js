import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import Axios from 'axios'
// import router from '@/router'

Vue.use(Vuex)
Vue.use(VueCookies)
export default new Vuex.Store({
  state: {
    theme:localStorage.getItem('theme') || 'theme-light',
    user:{
      
      name:localStorage.getItem("name") || '',
      email:localStorage.getItem("email") || '',
      mobileno:localStorage.getItem("mobileno") || '',
      role:localStorage.getItem("role") || '',
      method:localStorage.getItem("method")||'',
      division:localStorage.getItem("division") || '',
      uid:localStorage.getItem("uid") || '',
      semester:localStorage.getItem("semester") || '',
      department:localStorage.getItem("department") || '',
      course:localStorage.getItem("course") || '',
      verified:localStorage.getItem("verified") || false,
      token:VueCookies.get("token") || null,
      profileCompletion: localStorage.getItem("profileCompletion") || false,
    },
    
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
    },
    getProfileStatus(state){
      return state.user.profileCompletion
    },
    getVerifiedStatus(state){
      return state.user.verified
    }
    
  },
  mutations: {
    setToken(state,token){
      state.user.token=token
    },
    setUserDetails(state,{name,email,role,method,mobileno,division,uid,semester,department,course,verified,profileCompletion}){
      state.user.name=name,
      state.user.email=email,
      state.user.role=role,
      state.user.method=method,
      state.user.mobileno=mobileno,
      state.user.division=division,
      state.user.uid=uid,
      state.user.semester=semester,
      state.user.department=department,
      state.user.course=course,
      state.user.verified=verified,
      state.user.profileCompletion=profileCompletion,
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("role",role)
      localStorage.setItem("method",method)
      localStorage.setItem("mobileno",mobileno)
      localStorage.setItem("division",division)
      localStorage.setItem("uid",uid)
      localStorage.setItem("semester",semester)
      localStorage.setItem("department",department)
      localStorage.setItem("course",course)
      localStorage.setItem("verified",verified)
      localStorage.setItem("profileCompletion",profileCompletion)
    },
    setMode(state){
      state.theme = state.theme === 'theme-light' ? 'theme-dark':'theme-light'
      localStorage.setItem('theme',state.theme)
    },
    profileCompleted(state){
      localStorage.setItem("isProfileCompleted","true")
      state.profileComplete.isCompleted=true
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
          let expires = (new Date(Date.now()+ 43200*1000)).toUTCString();
          VueCookies.set("token",response.data.token,expires);
          context.commit('setToken',response.data.token)
          context.commit('setUserDetails',response.data.user_data)
          console.log(response.data.user_data)
          resolve(response)
          
        })
        .catch(error=>{
          console.log("Login error"+JSON.stringify(error.response.data.errors.message))
          alert(error.response.data.errors.message)
          
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
    },
    // For completing profile
    CONFIRM_PROFILE(context,payload){
      return new Promise((resolve,reject)=>{
        let data = JSON.stringify({
          role:payload.RegisterAs,
          semester:payload.Sem,
          department:payload.Dept,
          division:payload.division,
          uid:payload.uid,
          mobileno:payload.mobileno,
          course:payload.course

        })
        let method = localStorage.getItem("method")
        let token = VueCookies.get("token")
        console.log(payload)
        Axios.patch('https://eklavya-server.herokuapp.com/API/auth/profile_patch',data,
        {
        headers:{
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${method} ${token}`
        }
        }
        )
        .then(response => {
          console.log(response)
          context.commit('setUserDetails',response.data.user_data)
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
