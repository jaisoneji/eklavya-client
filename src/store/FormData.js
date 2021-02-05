import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import Axios from 'axios'
// import router from '@/router'
const baseDomain="https://eklavya-server.herokuapp.com/api/v1"
Vue.use(Vuex)
Vue.use(VueCookies)
export default new Vuex.Store({
    state:{
      questions:{
          questions:[],
          options:[],        
          answers:[],
      },
      schedule:{
        fname:'',
        time:'',
        date:'',
        sem:'',
        div:'',
        msg:'',
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
          getScheduleDetails(state){
            return state.schedule
          },
          getFname(state){
            return state.schedule.fname
          },
          getTime(state){
            return state.schedule.time
          },
          getDtae(state){
            return state.schedule.date
          },
          getSem(state){
            return state.schedule.sem
          },
          getDiv(state){
            return state.schedule.div
          },
          getMsg(state){
            return state.schedule.msg
          }
    },
    mutations:{
        setMcq(state,{questions,options,answers}){
            state.questions.questions=questions,
            state.questions.options=options,
            state.questions.answers=answers,

            localStorage.setItem("questions",questions)
            localStorage.setItem("options",options)
            localStorage.setItem("answers",answers)
          },
        setSchedule(state,{fname,time,date,sem,div,msg}){
            state.schedule.fname=fname,
            state.schedule.time=time,
            state.schedule.date=date,
            state.schedule.sem=sem,
            state.schedule.div=div,
            state.schedule.msg=msg,

            localStorage.setItem("fname",fname)
            localStorage.setItem("time",time)
            localStorage.setItem("date",date)
            localStorage.setItem("sem",sem)
            localStorage.setItem("div",div)
            localStorage.setItem("msg",msg)
        }
    },
    actions:{
     //edit,update
     //next schedule
    }
   })
   // You can assign a store to variable and export 
    export const store = new Vuex.Store({})
   // Import the store
   import { store } from '/path/to/file'