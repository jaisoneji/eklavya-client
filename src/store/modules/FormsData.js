import Vue from 'vue'
import Axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
const baseDomain="https://eklavya-server.herokuapp.com/api/v1"
const defaultState = {
    content:[
      {
          'id':1,
          'question': ["This is a question1"],
          'options':['op1 jai','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'2',
      },
      {
          'id':2,
          'question': ["This is a question2 sonia"],
          'options':['op1 sonia','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'1',
      },
      {
          'id':3,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':4,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':5,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':6,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':7,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':8,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':9,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
      {
          'id':10,
          'question': ["This is a sonia ashok thakurb question1"],
          'options':['op1 smith','op2','op3','op4'],
          'answer':['op1'],
          'type':'',
          'weightage':'10',
      },
  ],
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
};

const mutations = {
    setMcq(state,{title, Rquestions}){
        state.title = title,
        state.content = Rquestions
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
};

const getters = {
  getContent(state) {
      return state.content
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};