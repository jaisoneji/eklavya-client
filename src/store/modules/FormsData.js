import Vue from 'vue'
import Axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
const baseDomain="https://eklavya-server.herokuapp.com/api/v1"
const defaultState = {
    isFromScrape:localStorage.getItem("isFromScrape") || false,
    content:JSON.parse(localStorage.getItem("MCQs")) || [],
    title:'',
    description:'',
    users:[],
    class:[],
    duration:'',
    attempts:'',
    visibility:false,
    view_count:'',
    results:'',
    schedule:{
      startTime:'',
      endTime:'',
    },

    // FOr Fetched Forms
    Forms:[]
};

const actions = {
    SCHEDULE({ getters},payload){
        return new Promise((resolve,reject)=>{
          let data = JSON.stringify({
            title:payload.title,
            description:payload.desc,
            attempts:payload.attempts,
            users:payload.user,
            class:payload.dept,
            keywords: [payload.title],
            course:payload.course,
            content: getters.getContent,
            duration: 30,
            schedule: {
              startTimeStamp:payload.startTime,
              endTimeStamp:payload.endTime,
            }
          })
          let method = localStorage.getItem("method")
        let token = VueCookies.get("token")
          Axios.post(`${baseDomain}/proctored/forms/`,data,
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
            resolve(response)
            
          })
          .catch(error=>{
            console.log(error)
            alert(error.response.data.errors.message)

            reject(error)
  
          })
        })
      },
      MCQFORM({commit,getters},payload){
        return new Promise((resolve) => {
          commit('setMcq',payload)
          resolve(getters.getContent)
        }).catch(e => {
          throw new Error(e)
        })
      },
      FETCH_FORM(context){
        return new Promise((resolve,reject)=>{
          let method = localStorage.getItem("method")
          let token = VueCookies.get("token")
            Axios.get(`${baseDomain}/proctored/forms/`,
              {
                headers:{
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  "Authorization": `Bearer ${method} ${token}`
                }
              }
            )
            .then(response => {
              console.log(response.data)
              context.commit("saveFetchedForms",response.data)
              resolve(response.data)
              
            })
            .catch(error=>{
              console.log(error)
              alert(error.response.data.errors.message)
              reject(error)
    
            })
        })
      }
};

const mutations = {
    setMcq(state,{Rquestions}){

        state.content = Rquestions
        localStorage.setItem("MCQs",JSON.stringify(Rquestions))

      },
    setSchedule(state,{title,description,users,attempts,duration,startTime,endTime}){
      state.title=title,
      state.description=description,
      state.users=users,
      state.attempts=attempts,  
      state.duration=duration,
      state.schedule.startTime=startTime,
      state.schedule.endTime=endTime,
        localStorage.setItem("startTime",startTime)
        localStorage.setItem("endTime",endTime)
    },
    setMcqFromImageOCR(state,payload){
      localStorage.removeItem("isFromScrape")
      state.content=payload.Rquestions[0]
      // console.log(payload.Rquestions[0][0])
      localStorage.setItem("MCQs",JSON.stringify(payload.Rquestions[0]))

    },
    saveTemporaryChanges(state,payload){
      state.content=payload.Rquestions
      // console.log(payload.Rquestions[0][0])
      localStorage.setItem("MCQs",JSON.stringify(payload.Rquestions))

    },
    saveFetchedForms(state,payload){
      state.Forms = payload
    }
};

const getters = {
  getContent(state) {
    console.log(localStorage.getItem("isFromScrape"))
    if(localStorage.getItem("isFromScrape")){
      console.log("Inside Scrape content")
      console.log(JSON.parse(localStorage.getItem("MCQs")))
      return JSON.parse(localStorage.getItem("MCQs"))
    }
    else{
      console.log("Inside normal getContent")
      // let ContentArray = []
      // ContentArray.push(state.content)
      // return ContentArray
      return state.content
    }
  }
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};