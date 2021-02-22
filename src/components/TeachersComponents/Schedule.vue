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
            <div @click.prevent="schedule()" class="flex justify-center m-10">
                <button class="flex font-bold text-xl w-32 h-14 items-center justify-center bg-background-primary text-text-secondary rounded outline-none align-center">Schedule</button>
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
        schedule(){
            this.$store.dispatch('SCHEDULE',{
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
            })
            .catch(error=>{
                console.log(error)
            })
            
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
