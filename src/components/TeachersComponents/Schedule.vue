<template>
    <!-- main background -->
<div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary md:flex-row " :class="theme">
    <!-- first div -->
        <div class="flex justify-center items-center flex-col rounded-lg  w-11/12 h-184 bg-background-secondary md:w-1/2 md:h-132"   :class="theme">
            
             <!-- heading -->
            <h1 class="text-white text-center mt-4 font-hairline text-5xl"  :class="theme">Schedule Form</h1>
            
            <!-- Name -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="title" v-model="title" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Title">
                </div>
            <!-- name ends -->
            <!-- Description -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="desc" v-model="desc" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Description">
                </div>
            <!-- desc ends -->
            <!-- user -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="user" v-model="user" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="User(optional)">
                </div>
            <!-- user ends -->
            
                <div  class="flex flex-row">
                      
                      <!-- course -->
                        <div class="mr-4 mt-10 inline-block relative w-18">
                            <select v-model="course" type="course" class=" text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">SEM</option>
                                <option value="BE">BE</option>
                                <option value="2">2</option>
                            </select>
                               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="5 -2 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>
                        </div>
                        <!--course ends -->

                        <!-- dept -->
                        <div class="mr-4 mt-10 inline-block relative ">
                            <select v-model="dept" type="dept"  class=" text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">DIV</option>
                                <option value="CMPN">D17A</option>
                                <option value="IT">D16A</option>
                                <option value="EXTC">D15A</option>
                                <option value="ETRX">D14A</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="5 -2 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>
                        </div>
                        <!-- dept ends-->

                        <!-- attempts -->
                        <div class="mt-10 inline-block relative w-18">
                            <select v-model="attempts" type="attempts"  class=" text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">Attempt</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="5 -2 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>
                        </div>
                        <!--attempts ends -->
                    </div>
                    <!-- start time picker -->
                    <div class=" w-8/10 flex flex-row mt-10 relative">
                        <label class="mr-4 text-lg w-1/2 text-white">Start time :</label>
                        <datetime type="datetime" v-model="startTime">

                        </datetime>

                    </div>
                    <!-- time picker -->
                    <!-- end time picker -->
                    <div class="w-8/10 flex flex-row mt-10 relative">
                        <label class="mr-4 text-lg w-1/2 text-white">End time :</label>
                        <datetime type="datetime" v-model="endTime" >

                        </datetime>
                    </div>
                    <!-- end picker -->
            
                <!-- button div -->
            <div  class="md:space-x-2 flex justify-center m-10">
                <button @click.prevent="schedule()" :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-text-btn rounded outline-none align-cente">Schedule</button>
                <button @click.prevent="cancelSchedule()" :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-background-secondary transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-white rounded outline-none align-cente">Cancel</button>

            </div>
        <!-- button div-->
        </div>
</div>
</template>

<script>
import { Datetime } from 'vue-datetime';
export default {
     components: {
    datetime: Datetime
  },
    data() {
      return{
          title:'',
          desc:'',
          user:'',
          course:'',
          dept:'',
          attempts:'',
          startTime:'',
          endTime:'',
          
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
     }
},
methods:{
        async schedule(){
            await this.$store.dispatch('SCHEDULE',{
                title:this.title,
                desc:this.desc,
                user:this.user,
                course:this.course,
                dept:this.dept,
                attempts:this.attempts,
                startTime:this.startTime,
                endTime:this.endTime
            })
            .then(response=>{
                console.log(response)
                localStorage.removeItem("isFromScrape")
                this.$router.push("/TeachersDashboard/")
            })
            .catch(error=>{
                console.log("Schedule.vue"+error)
            })
            
        },
        cancelSchedule(){
            localStorage.removeItem("isFromScrape")
            localStorage.removeItem("MCQs")
            this.$router.push("/TeachersDashboard/")
        }
    }
}
</script>

<style>

.oye-timepicker {
  display: flex;
  flex-direction: row;
}

.p-1 {
  padding: 5px;
}

</style>
