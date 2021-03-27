<template class="">
  <div :class="theme" class="scrollstyle overflow-y-scroll h-full w-screen bg-background-primary flex justify-center align-center ">
      <div class=" md:w-full md:h-full md:space-y-8 space-y-0 flex flex-col md:mt-16 mt-12  align-center items-center md:space-y-2">
          <h2 :class="theme" class="font-mono text-text-text txt-bold text-4xl">Welcome,{{name}}</h2>
          <!-- quiz start -->
          <div class=" md:w-19/20 w-full flex flex-col ">
            <h2 :class="theme" class="font-mono justify-start text-text-text txt-bold text-2xl">Quiz</h2>
                <div class="md:h-full p-4 flex  grid grid-flow-row md:grid-cols-4 md:grid-rows-auto  gap-4 grid-row-1 grid-col-1 w-full  md:w-full">
                    <div  :class="theme" v-for="(form) in Forms" :key="form.title" class=" ">
                        <div class="flex md:flex-col flex-col border px-2 py-4 border-background-border md:w-48 w-10/12 rounded-xl md:h-auto">
                                <div class="flex text-gray-700 md:w-full md:h-20 justify-center items-center" :class="getColor()">
                                    <h3 class="font-mono text-6xl">{{form.title.charAt(0)}}</h3>
                                </div>
                                <div class="w-full flex mt-2 align-center md:space-x-1">
                                    <div><i class="fas fa-calendar-times text-text-text align-center" :class="theme"></i></div>                    
                                    <div class="text-text-google">{{form.schedule.startTimeStamp.substr(0,10)}}</div>

                                    <div><i class="fa fa-clock text-text-text align-center md:ml-12" :class="theme"></i></div>                    
                                    <div class="text-text-google">{{getTime(form.schedule)}}</div>
                                </div>
                                <div class="flex flex-col space-y-0">
                                    <div v-if="getRole" class="flex "><h1 class="hover:text-indigo-900 cursor-pointer p-0 text-text-text font-mono text-bold text-3xl">{{form.title}}</h1></div>
                                    <div v-else @click.prevent="attemptQuiz(form.title)" target="_blank" class="flex"><h1 class="hover:text-indigo-900 cursor-pointer p-0 text-text-text font-mono text-bold text-3xl">{{form.title}}</h1></div>
                                    <p class="text-text-google">{{form.description}}</p >
                                </div>
                                <div class="">
                                    <h2 class="font-mono text-text-text"><span class="text-text-google">Owner: </span>{{form.owner.name}}</h2>
                                </div>
                        </div>
                    </div>

                </div>
              
                <!-- <h2 v-else :class="theme" class="border-background-border border font-mono justify-start text-text-text txt-bold text-2xl">No Quiz Scheduled</h2> -->


          </div>
          <!-- quiz end -->
          
          <!-- <div class="divide-y divide-gray-500"></div> -->

          <!-- classroom start -->
          <div class=" md:w-19/20 w-full flex flex-col divide-y divide-gray-500 ">
            <h2 :class="theme" class="font-mono justify-start text-text-text txt-bold text-2xl">Classroom</h2>
                <div >
                <div class="md:h-full p-4 flex  grid grid-flow-row m md:grid-cols-4 md:grid-rows-auto md:grid-flow-col gap-4 grid-row-1 grid-col-1 w-full  md:w-full">
                    <div  :class="theme" v-for="(form) in Forms" :key="form.title" class=" ">
                        <div class="flex md:flex-col flex-col border px-2 py-4 border-background-border md:w-64 w-10/12 rounded-xl md:h-56">
                                <div class="flex text-gray-700 md:w-full md:h-20 justify-center items-center" :class="getColor()">
                                    <h3 class="font-mono text-6xl">{{form.title.charAt(0)}}</h3>
                                </div>
                                <div class="w-full flex mt-2 align-center md:space-x-1">
                                    <div><i class="fas fa-calendar-times text-text-text align-center" :class="theme"></i></div>                    
                                    <div class="text-text-google">{{form.schedule.startTimeStamp.substr(0,10)}}</div>

                                    <div><i class="fa fa-clock text-text-text align-center md:ml-12" :class="theme"></i></div>                    
                                    <div class="text-text-google">{{getTime(form.schedule)}}</div>
                                </div>
                                <div class="flex flex-col space-y-0">
                                    <div class="flex"><h1 class="p-0 text-text-text font-mono text-bold text-3xl">{{form.title}}</h1></div>
                                    <p class="text-text-google">{{form.description}}</p >
                                </div>
                                <div class="">
                                    <h2 class="font-mono text-text-text"><span class="text-text-google">Owner: </span>{{form.owner.name}}</h2>
                                </div>
                        </div>
                    </div>

                </div>
                </div>
                <!-- <h2 v-else :class="theme" class="border-background-border border font-mono justify-start text-text-text txt-bold text-2xl">No Quiz Scheduled</h2> -->


          </div>
          <!-- classroom end -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            Forms:[],
            colors:['bg-yellow-500','bg-red-500','bg-indigo-400','bg-green-400','bg-blue-400'],
            classroom:[]
        }
    },
    async created(){
        this.name=localStorage.getItem("name")
        // if else for checking role of user if it is teacher then this sameee else new call FETCH_FORM_STUDENT
        if(await this.$store.getters.getRole === 'faculty'){
            
                console.log("Inside Welcome's call fetch")
                await this.$store.dispatch("FETCH_FORM")
                .then(response => {
                    console.log(response)
                    this.Forms = response
                })
                .catch(error=> {
                    console.log(error)
                })
            
        }
        else{
            if(JSON.parse(localStorage.getItem('MCQs')).length > 0){
                console.log("Inside Welcome's local fetch")
                this.Forms = JSON.parse(localStorage.getItem('MCQs'))
            }else{

                await this.$store.dispatch("FETCH_FORM_STUDENT")
                .then(response => {
                    console.log(response)
                    this.Forms = response
                })
                .catch(error=> {
                    console.log(error)
                })
            }
        }
        
    },
    computed:{
        theme(){
            if(this.$store.getters.getMode === 'theme-dark'){
                return 'theme-dark'
            }
            else{
                return 'theme-light'
            }
        },
        isEmpty(){
                if(this.Forms.length > 0){
                    return false
                }else{
                    return true
                }
        },
        getRole(){
            if(this.$store.getters.getRole === 'faculty'){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        getColor(){
            let randomNumber = Math.floor(Math.random()*this.colors.length);
            return this.colors[randomNumber]
        },
        getTime(payload){
            console.log(payload.startTimeStamp)
            console.log(payload.endTimeStamp)
            let startTime = new Date(new Date(payload.startTimeStamp).toISOString())
            let endTime = new Date(new Date(payload.endTimeStamp).toISOString())
            let minutes = (endTime.getTime()-startTime.getTime()) / (1000*60)
            console.log(minutes)
            if(minutes > 60){
                return (minutes/60 + "hours")
            }
            else{
                return (minutes + "mins.")
            }
            

        },
        attemptQuiz(title){
            console.log(title)
            this.$router.push({name: 'AttemptQuiz', params: { quizName: title}});
        }
    }
}
</script>

<style scoped>


</style>