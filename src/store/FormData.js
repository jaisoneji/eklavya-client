import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
// import Axios from 'axios'
// import router from '@/router'
// const baseDomain="https://eklavya-server.herokuapp.com/api/v1"
Vue.use(Vuex)
Vue.use(VueCookies)
export default new Vuex.Store({
    state:{
      content:[],
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
      }
    },
    getters:{
        getQuestion(state){
            return state.questions.questions
          },
          getOptions(state){
            return state.questions.options
          },
          getAnswer(state){
            return state.questions.answers
          },
          getTitle(state){
            return state.title
          },
          getDescription(state){
            return state.description
          },
          getContent(state){
            return state.content
          },
          getUsers(state){
            return state.users
          },
          getAttempts(state){
            return state.attempts
          },
          getClass(state){
            return state.class
          },
          getStartTime(state){
            return state.schedule.startTime
          },
          getEndTime(state){
            return state.schedule.endTime
          }
    },
    mutations:{
        setMcq(state,{title, Rquestions}){
            state.title = title,
            state.content = Rquestions
            // state.questions.questions=questions,
            // state.questions.options=options,
            // state.questions.answers=answers,

            // localStorage.setItem("questions",questions)
            // localStorage.setItem("options",options)
            // localStorage.setItem("answers",answers)
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

        }
    },
    actions:{
      SCHEDULE(context,payload){
        return new Promise((resolve,reject)=>{
          let date  = getEndTime()
          console.info('DATAGETHERE  CONTEXT: ', context)
          let data = JSON.stringify({
            title:payload.title,
            desc:payload.desc,
            user:payload.user,
            course:payload.course,
            dept:payload.dept,
            attempts:payload.attempts,
            startTime:payload.startTime,
            endTime:payload.endTime,
          })
          console.log('DATAGETHERE : ', data)

          // Axios.post(`${baseDomain}/auth/signup`,data,
          //   {
          //     headers:{
          //       'Content-Type': 'application/json',
          //       "Access-Control-Allow-Origin": "*"
          //     }
          //   }
          // )
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
      MCQFORM(context,payload){
        return new Promise((resolve,reject)=>{
          let data = JSON.stringify({
            title:payload.title,
            Rquestions: payload.questions
          })
          console.log(data)
          // Axios.post(`${baseDomain}/auth/signup`,data,
          //   {
          //     headers:{
          //       'Content-Type': 'application/json',
          //       "Access-Control-Allow-Origin": "*"
          //     }
          //   }
          // )
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
     //edit,update
     //next schedule
    }
   })