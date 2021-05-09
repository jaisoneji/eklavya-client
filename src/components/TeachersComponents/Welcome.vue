<template class="">
  <div :class="theme" class=" py-10   h-screen w-11/12 bg-background-primary flex justify-center align-center ">
      <div :class="theme" class="bg-background-primary md:w-49/50 md:h-full md:space-y-8 space-y-0 flex flex-col md:my-16 mt-12  align-center items-start">
          <h2 :class="theme" class="font-sans text-text-text txt-bold text-4xl">Welcome,{{name}}</h2>
          <!-- quiz start -->
          <div class="  mt-2 md:w-19/20 w-full">
            <div class="border-b-2 rounded-t-lg flex w-full  py-2">
                <div class="flex   w-full py-2 ml-2 flex-1 ">
                    <h2 v-if="this.$store.getters.getRole === 'faculty'" :class="theme" class="font-sans  text-text-text text-bold text-2xl">Quiz</h2>
                    <h2 v-else :class="theme" class="font-sans justify-start text-text-text text-bold text-2xl">Upcoming Quiz</h2>
                </div>
                <div class="flex px-4 rounded-md bg-background-secondary hover:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            class="flex justify-center items-center h-full"
                            viewBox="0 0 226 226"
                            style=" fill:#000000;"><g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none" fill-rule="nonzero"></path><g fill="#ffffff" fill-rule="evenodd"><path d="M103.58333,18.83333v84.75h-84.75v18.83333h84.75v84.75h18.83333v-84.75h84.75v-18.83333h-84.75v-84.75z"></path></g></g>
                    </svg>
                    <button @click="toggleModal" class="flex justify-center items-center w-full h-full  px-2 py-2 text-white font-sans font-semibold focus:outline-none ">
                        Create from Scratch</button>
                </div>
                
            </div>
            <!-- <hr class="mt-2 "> -->
                <!-- <div class="md:h-full p-4 flex  grid grid-flow-row md:grid-cols-4 md:grid-rows-auto  gap-4 grid-row-1 grid-col-1 w-full  md:w-full">
                </div> -->
                <splide v-if="this.Forms.length > 0 "  :options="options" class="splider">
                    <splide-slide  :class="theme" style="padding-bottom:2rem;padding-top:2rem" v-for="(form) in Forms" :key="form.title" >
                        <div class=" rounded-lg  overflow-hidden shadow-xl md:mt-4md:py-4  md:w-64 w-10/12  md:h-auto">
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
                <div v-if="isEmpty && isLoading === false" class="py-4 justify-center align-center">
                    <div class="flex justify-center items-center align-center">
                        <div class="w-32 h-full">
                            <img src="@/assets/noquiz.png" alt="" srcset="">
                        </div>
                        <h3 class="text-xl font-sans ml-4 font-semibold text-text-text"><span class="">Whoops</span>,No quiz is scheduled yet</h3>
                    </div>
                    
                </div>
                <vue-loading v-show="isLoading"  type="balls"  color="#1c75bc" :size="{ width: '75px', height: '75px' }"></vue-loading>
                <!-- <h2 v-else :class="theme" class="border-background-border border font-sans justify-start text-text-text txt-bold text-2xl">No Quiz Scheduled</h2> -->


          </div>
          <!-- quiz end -->

          <!-- classroom start -->
          <div v-if="this.$store.getters.getRole === 'faculty'" class="mt-2 md:w-19/20 w-full   ">
            
            <div class=" rounded-t-lg flex w-full  py-2">
                <div class="border-b-2 py-2 flex ml-2 flex-1 ">
                    <h2 :class="theme" class="font-sans  text-text-text text-bold text-2xl">Your past Quizzes</h2>
                </div>    
            </div>
            <!-- <hr class="mt-2 "> -->
                <!-- <div class="md:h-full p-4 flex  grid grid-flow-row md:grid-cols-4 md:grid-rows-auto  gap-4 grid-row-1 grid-col-1 w-full  md:w-full">
                </div> -->
                <splide v-if="this.History.length > 0 "  :options="HistoryOptions" class="splider">
                    <splide-slide  :class="theme" style="padding-bottom:2rem;padding-top:2rem" v-for="(form) in History" :key="form.title" >
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
                                <div class="px-2 my-4 flex justify-center">
                                    <button @click.prevent="downloadReport(form._id)" class=" w-11/12 px-2 py-2 text-white text-lg hover:shadow-btn focus:outline-none font-light bg-background-secondary">Download Report</button>
                                </div>
                        </div>
                    </splide-slide>
                </splide>
                <div v-if="this.History.length<=0 && isLoading===false" class="py-4 justify-center align-center">
                    <div class="mt-4 flex justify-center items-center align-center">
                        <div class="w-32 h-full">
                            <img src="@/assets/nohistory.png" alt="" srcset="">
                        </div>
                        <h3 class="text-xl font-sans ml-4 font-semibold text-text-text"><span class="">Whoops</span>,Your history is empty</h3>
                    </div>
                </div>
                <vue-loading v-show="isLoading"  type="balls"  color="#1c75bc" :size="{ width: '75px', height: '75px' }"></vue-loading>
                <!-- <h2 v-else :class="theme" class="border-background-border border font-sans justify-start text-text-text txt-bold text-2xl">No Quiz Scheduled</h2> -->
          </div>
          <!-- classroom end -->

            <!-- -Modal for creating quiz starts here--- -->
            <QuizModal @toggle="toggleModal" v-show="showModal"></QuizModal>
            <!-- -Modal for creating quiz ends here--- -->
                        
      </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
import QuizModal from '@/components/QuizModal'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

// import AttemptQuiz from "@/components/StudentComponents/AttemptQuiz.vue";
export default {
    components: {
        Splide,
        SplideSlide,
        VueLoading,
        QuizModal
    },
    mounted(){
       
    },
    data(){
        return{
            name: '',
            Forms:[],
            History:[],
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
            },
            HistoryOptions:{
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
            },
            isLoading:false,
            showModal:false
        }
    },
    async created(){
        
        this.name=localStorage.getItem("name")
        // if else for checking role of user if it is teacher then this sameee else new call FETCH_FORM_STUDENT
        if(await this.$store.getters.getRole === 'faculty'){
                this.isLoading = true
                localStorage.setItem("localMCQs",JSON.stringify())
                //window. location. reload();
                console.log("Inside Welcome's call fetch")
                await this.$store.dispatch("FETCH_FORM")
                .then(response => {
                    console.log(response)
                    // this.Forms = response
                    this.makeHistory(response)
                    // this.Forms.sort((a,b)=> b.schedule.startTimeStamp - a.schedule.startTimeStamp)
                    this.sortData()
                    this.isLoading = false
                })
                .catch(error=> {
                    console.log(error)
                    this.isLoading = false
                })
            
        }
        else{
                this.isLoading = true
                // window.location. reload()
                await this.$store.dispatch("FETCH_FORM_STUDENT")
                .then(response => {
                    console.log(response)
                    this.makeHistory(response)
                     this.isLoading = false
                })
                .catch(error=> {
                    console.log(error)
                     this.isLoading = false
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
        },
        makeHistory(res){
            res.forEach((obj)=>{
                let currentTime = new Date()
                let endTime = new Date(new Date(obj.schedule.endTimeStamp).toISOString())
                if(currentTime > endTime){
                    this.History.push(obj)
                }
                else{
                    this.Forms.push(obj)
                    console.log("current")
                }
                
            })
        },
        sortData(){
            this.Forms = this.Forms.sort((a,b)=> {
                let c =a.schedule.startTimeStamp
                
                let d = b.schedule.startTimeStamp
                return new Date(c) - new Date(d)
            })
        },
        downloadReport(id){
            window.open(`http://eklavya-server.herokuapp.com/api/v1/proctored/forms/generateReport/${id}`, '_blank');
        },
        toggleModal: function(){
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
.whoops{
  font-family: 'Sriracha', cursive;
}
.splide__arrow svg{
    fill:#1c75bc;
}
</style>