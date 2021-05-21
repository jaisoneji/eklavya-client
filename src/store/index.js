import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import Axios from 'axios'
import FormsData from './modules/FormsData'
import Classroom from './modules/Classroom'

// import router from '@/router'
const baseDomain="https://eklavya-server.herokuapp.com/api/v1"
const localDomain = "https://eklavya-server.herokuapp.com/api/v1"
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
      picture: localStorage.getItem("picture") || '',
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
    getName(state){
      return state.user.name
    },
    getProfileStatus(state){
      return state.user.profileCompletion
    },
    getVerifiedStatus(state){
      return state.user.verified
    },
    getRole(state){
      return state.user.role
    },
    getPicture(state){
      return state.user.picture
    },
    getMethod(state){
      return state.user.method
    },
    getMDEMO(){
      return 'HELLO'
    }
    
  },
  mutations: {
    setToken(state,token){
      state.user.token=token
    },
    setUserDetails(state,{name,email,role,method,mobileno,division,uid,semester,picture,department,course,verified,profileCompletion}){
      state.user.name=name,
      state.user.email=email,
      state.user.role=role,
      state.user.method=method,
      state.user.mobileno=mobileno,
      state.user.division=division,
      state.user.uid=uid,
      state.user.picture=picture,
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
      localStorage.setItem("picture",picture)
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
    LOGIN(context,credentials){
      console.log(`${baseDomain}/auth/signin`)
      return new Promise((resolve,reject)=>{
        Axios.post(`${baseDomain}/auth/signin`,{
          email:credentials.email,
          password:credentials.password
        })
        .then(response => {
          let expires = (new Date(Date.now()+ 43200*1000)).toUTCString();
          VueCookies.set("token",response.data.token,expires);
          console.log(response.data)
          context.commit('setToken',response.data.token)
          context.commit('setUserDetails',response.data.user_data)
          console.log(response.data.user_data)
          resolve(response)
          
        })
        .catch(error=>{
          console.log("Login error"+JSON.stringify(error.response.data.errors.message))
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
        Axios.post(`${baseDomain}/auth/signup`,data,
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
          alert(error.response.data.errors.message)
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
        Axios.patch(`${baseDomain}/auth/profile_patch`,data,
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
    },
    FETCH_DATA(context){
      return new Promise((resolve,reject)=>{
        let method = localStorage.getItem("method")
        let token = VueCookies.get("token")
        Axios.post(`${baseDomain}/auth/verify_token`,{},
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
    },
    // THis action will be used in scrapper module
    SCRAPE_QUESTIONS(context,payload){
      return new Promise((resolve,reject)=>{
        let method = localStorage.getItem("method")
        let token = VueCookies.get("token")
        console.log(token)
        console.log(`Bearer ${method} ${token}`)
        let data=JSON.stringify({
          scrapeURL: payload.scrapeURL
        })
        console.log(data)
        let endpoint=`${baseDomain}/scrape`
        console.log(`${endpoint}`)
        // const config = {
        //   headers:{
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Authorization': `Bearer ${method} ${token}`
        //   }
        // };
        // console.log(config);
        Axios.post(`${localDomain}/scrape`,data,
        {
        headers:{
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${method} ${token}`
        }
        }
        )
        .then(response=>{
          console.log(response.data)
          resolve(response)
        })
        .catch(error=>{
          console.log("SCRAPE_QUESTIONS Error"+error)
          reject(error)
        })
      })
    },
    // Scrape action ends
    // Image OCR logic
    IMAGEOCR(context,payload){
      return new Promise((resolve,reject)=>{
        let method = localStorage.getItem("method")
        let token = VueCookies.get("token")
        let imageURL=JSON.stringify({
          image:payload
        })
        Axios.post(`${baseDomain}/processImage/filtertext`,imageURL,
        {
          headers:{
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${method} ${token}`
          }
        })
        .then(res=>{
          console.log("Image ocr resposnse store"+res)
          resolve(res)
        })
        .catch(error=>{

          console.log("Image OCR Store error: "+error)
          reject(error)
        })
      })
    },
    // Image OCR login ends
    DELETE_USER(context,payload){
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          email: payload
        }
      }
      return new Promise((resolve,reject)=>{
        Axios.delete(`${baseDomain}/auth/delete/user`,config)
        .then(res=>{
          console.log("Delete user Store"+res)
          resolve(res)
        })
        .catch(error=>{

          console.log("Delete user Store: "+error)
          reject(error)
        })
      })
    }
  },
  modules: {
    // to import form data
    formsData: FormsData,
    classroom: Classroom
  }
})
