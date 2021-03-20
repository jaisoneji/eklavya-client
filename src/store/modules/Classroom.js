import Vue from 'vue'
import Axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
const baseDomain="https://eklavya-server.herokuapp.com/api/v1"
const defaultState = {
    title:'',
    desc:'',
    course: '',
    dept:'',
    division:'',
};

const actions = {
    TEACHERCLASSROOM(context,payload){
        return new Promise((resolve,reject)=>{
          let data = JSON.stringify({
            title:payload.title,
            desc:payload.desc,
            course:payload.course,
            dept:payload.dept,
            division:payload.division
          })
        //   payload.log(title)
        //   payload.log(desc)
        //   payload.log(cousre)
        //   payload.log(dept)
        //   payload.log(division)
        let method = localStorage.getItem("method")
        let token = VueCookies.get("token")
          Axios.post(`${baseDomain}/classroom/`,data,
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
      
};

const mutations = {
    setClassroomDetails(state,{title,desc,course,dept,division}){
        state.title=title,
        state.desc=desc,
        state.course=course,
        state.dept=dept,
        state.division=division,
        localStorage.setItem("title",title)
        localStorage.setItem("desc",desc)
        localStorage.setItem("course",course)
        localStorage.setItem("dept",dept)
        localStorage.setItem("division",division)
      },
};

const getters = {
    getTitle(state){
        return state.title
      },
      getDesc(state){
        return state.desc
      },
      getCourse(state){
        return state.course
      },
      getDept(state){
        return state.Dept
      },
      getDivision(state){
        return state.division
      },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};