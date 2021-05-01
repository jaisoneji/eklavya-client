<template class="">
  <div :class="theme" class="scrollstyle overflow-y-scroll overflow-x-hidden h-full w-screen bg-background-primary flex justify-center align-center ">
      <div class=" md:w-full md:h-full md:space-y-8 space-y-0 flex flex-col md:mt-16 mt-12  align-center items-center md:space-y-2">
          <h2 :class="theme" class="font-sans text-text-text txt-bold text-4xl">Welcome,{{name}}</h2>
          <!-- quiz start -->
          <div class=" md:w-19/20 w-full   ">
            <div class="flex">
                <div class="flex flex-1">
                    <h2 v-if="this.$store.getters.getRole === 'faculty'" :class="theme" class="font-sans justify-start text-text-text txt-bold text-2xl">Quiz</h2>
                    <h2 v-else :class="theme" class="font-sans justify-start text-text-text txt-bold text-2xl">Upcoming Quiz</h2>
                </div>
                <div class="flex px-4 rounded-md bg-background-secondary hover:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            class="flex justify-center items-center h-full"
                            viewBox="0 0 226 226"
                            style=" fill:#000000;"><g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none" fill-rule="nonzero"></path><g fill="#ffffff" fill-rule="evenodd"><path d="M103.58333,18.83333v84.75h-84.75v18.83333h84.75v84.75h18.83333v-84.75h84.75v-18.83333h-84.75v-84.75z"></path></g></g>
                    </svg>
                    <button class="flex justify-center items-center w-full h-full  px-2 py-2 text-white font-sans font-semibold focus:outline-none ">
                        Create from Scratch</button>
                </div>
            </div>
            <hr class="mt-2 ">
                <!-- <div class="md:h-full p-4 flex  grid grid-flow-row md:grid-cols-4 md:grid-rows-auto  gap-4 grid-row-1 grid-col-1 w-full  md:w-full">
                </div> -->
                <splide v-if="this.Forms.length > 0 "  :options="options" class="splider">
                    <splide-slide  :class="theme" style="padding-bottom:2rem;padding-top:2rem" v-for="(form) in Forms" :key="form.title" >
                        <div class=" rounded-lg  overflow-hidden shadow-lg md:mt-4md:py-4  md:w-64 w-10/12  md:h-auto">
                                <div class="relative  flex text-gray-700 md:w-full md:h-28 justify-start align-center items-center" >
                                    <h3 class=" md:pl-4 z-10 text-white font-sans  text-6xl">{{form.title.charAt(0)}}</h3>
                                    <img class="overflow-hidden object-cover md:w-full md:h-full absolute" :src="getImage()" alt="" srcset="">
                                </div>
                                <div class="w-full ml-2 text-sm flex py-2 mt-2 align-center justify-between md:space-x-1">
                                    <div class="md:w-full flex-auto flex w-1/2">
                                        <div class=""><i class="fas fa-calendar-times text-text-text align-center" :class="theme"></i></div>                    
                                        <div class="md:pl-2 text-text-google">{{form.schedule.startTimeStamp.substr(0,10)}}</div>
                                    </div>

                                    <div class="md:w-full ml-2 flex-auto flex">
                                        <div><i class="fa fa-clock text-text-text align-center " :class="theme"></i></div>                    
                                    <div class="md:pl-2 text-text-google">{{getTime(form.schedule)}}</div>
                                    </div>
                                </div>
                                <div class="px-2  flex flex-col space-y-0">
                                    <div v-if="getRole" class="flex "><h1 class="hover:text-indigo-900 cursor-pointer p-0 text-text-text font-sans text-bold text-2xl">{{form.title}}</h1></div>
                                    <div v-else @click.prevent="attemptQuiz(form.title)" target="_blank" class="flex"><h1 class="truncate hover:text-indigo-900 cursor-pointer p-0 text-text-text font-sans text-bold text-2xl">{{form.title}}</h1></div>
                                    <p class="text-text-google">{{form.description}}</p >
                                </div>
                                <div class="px-2 mb-2">
                                    <h2 class="truncate font-sans text-text-text"><span class="text-text-google">Owner: </span>{{form.owner.name}}</h2>
                                </div>
                        </div>
                    </splide-slide>
                </splide>
                <div v-else class="justify-center align-center">
                    <vue-loading   type="spin"  color="black" :size="{ width: '75px', height: '75px' }"></vue-loading>
                </div>
                <!-- <h2 v-else :class="theme" class="border-background-border border font-sans justify-start text-text-text txt-bold text-2xl">No Quiz Scheduled</h2> -->


          </div>
          <!-- quiz end -->
          
          <!-- <div class="divide-y divide-gray-500"></div> -->

          <!-- classroom start -->
          <div v-if="this.$store.getters.getRole === 'faculty'" class=" md:w-19/20 w-full   ">
            
            <h2  :class="theme" class="font-sans justify-start text-text-text txt-bold text-2xl">Classrooms</h2>
            <hr class="mt-2 ">
                <!-- <div class="md:h-full p-4 flex  grid grid-flow-row md:grid-cols-4 md:grid-rows-auto  gap-4 grid-row-1 grid-col-1 w-full  md:w-full">
                </div> -->
                <splide v-if="this.Forms.length > 0 "  :options="options" class="splider">
                    <splide-slide  :class="theme" style="padding-bottom:2rem;padding-top:2rem" v-for="(form) in Forms" :key="form.title" >
                        <div class=" rounded-lg  overflow-hidden shadow-lg md:mt-4md:py-4  md:w-64 w-10/12  md:h-auto">
                                <div class="relative  flex text-gray-700 md:w-full md:h-28 justify-start align-center items-center" >
                                    <h3 class=" md:pl-4 z-10 text-white font-sans  text-6xl">{{form.title.charAt(0)}}</h3>
                                    <img class="overflow-hidden object-cover md:w-full md:h-full absolute" :src="getImage()" alt="" srcset="">
                                </div>
                                <div class="w-full ml-2 text-sm flex py-2 mt-2 align-center justify-between md:space-x-1">
                                    <div class="md:w-full flex-auto flex w-1/2">
                                        <div class=""><i class="fas fa-calendar-times text-text-text align-center" :class="theme"></i></div>                    
                                        <div class="md:pl-2 text-text-google">{{form.schedule.startTimeStamp.substr(0,10)}}</div>
                                    </div>

                                    <div class="md:w-full ml-2 flex-auto flex">
                                        <div><i class="fa fa-clock text-text-text align-center " :class="theme"></i></div>                    
                                    <div class="md:pl-2 text-text-google">{{getTime(form.schedule)}}</div>
                                    </div>
                                </div>
                                <div class="px-2  flex flex-col space-y-0">
                                    <div v-if="getRole" class="flex "><h1 class="hover:text-indigo-900 cursor-pointer p-0 text-text-text font-sans text-bold text-2xl">{{form.title}}</h1></div>
                                    <div v-else @click.prevent="attemptQuiz(form.title)" target="_blank" class="flex"><h1 class="truncate hover:text-indigo-900 cursor-pointer p-0 text-text-text font-sans text-bold text-2xl">{{form.title}}</h1></div>
                                    <p class="text-text-google">{{form.description}}</p >
                                </div>
                                <div class="px-2">
                                    <h2 class="truncate font-sans text-text-text"><span class="text-text-google">Owner: </span>{{form.owner.name}}</h2>
                                </div>
                        </div>
                    </splide-slide>
                </splide>
                <div v-else class="justify-center align-center">
                    <vue-loading   type="spin"  color="black" :size="{ width: '75px', height: '75px' }"></vue-loading>
                </div>
                <!-- <h2 v-else :class="theme" class="border-background-border border font-sans justify-start text-text-text txt-bold text-2xl">No Quiz Scheduled</h2> -->
          </div>
          <!-- classroom end -->
      </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

// import AttemptQuiz from "@/components/StudentComponents/AttemptQuiz.vue";
export default {
    components: {
        Splide,
        SplideSlide,
        VueLoading
    },
    mounted(){
       
    },
    data(){
        return{
            name: '',
            Forms:[],
            colors:['https://gstatic.com/classroom/themes/img_read.jpg','https://gstatic.com/classroom/themes/img_learnlanguage.jpg','https://gstatic.com/classroom/themes/Honors.jpg'],
            classroom:[],
            options:{
                drag:true,
                breakpoints: {
                    640: {
                        perPage: 1,
                        
                    }},
                    autoWidth: true,
                    padding: {
                    right: '5rem',
                    left : '5rem',
                },
                rewind:true,
                // background-color:none,
                perPage:2,
                gap: '1rem'
            }
        }
    },
    async created(){
        this.name=localStorage.getItem("name")
        // if else for checking role of user if it is teacher then this sameee else new call FETCH_FORM_STUDENT
        if(await this.$store.getters.getRole === 'faculty'){
                //window. location. reload();
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
            
                // window.location. reload()
                await this.$store.dispatch("FETCH_FORM_STUDENT")
                .then(response => {
                    console.log(response)
                    this.Forms = response
                })
                .catch(error=> {
                    console.log(error)
                })
            
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
        getImage(){
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