<template>
    <!-- main background -->
<div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary md:flex-row " :class="theme">
    <!-- first div -->
        <div class="flex justify-center items-center flex-col rounded-lg  w-11/12 h-184 bg-background-secondary md:w-1/2 md:h-132"   :class="theme">
            
             <!-- heading -->
            <h1 class="text-white text-center mt-4 font-hairline text-5xl"  :class="theme">Create Classroom</h1>
            
            <!-- Name -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="title" v-model="title" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Classroom Name">
                </div>
            <!-- name ends -->
            <!-- Description -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="desc" v-model="desc" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Description">
                </div>
            <!-- desc ends -->
            
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
                                <option disabled value="">DEPT</option>
                                <option value="CMPN">CMPN</option>
                                <option value="IT">IT</option>
                                <option value="EXTC">EXTC</option>
                                <option value="ETRX">ETRX</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="5 -2 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>
                        </div>
                        <!-- dept ends-->
                        <!-- ---division starts-- -->
                        <div class="mr-4 mt-10 inline-block relative ">
                            <select v-model="division" type="dept"  class=" text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">DIVISION</option>
                                <option value="D17A">D17A</option>
                                <option value="D16A">D16A</option>
                                <option value="D15A">D15A</option>
                                <option value="D14A">D14A</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="5 -2 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>
                        </div>
                        <!-- --division ends-- -->
                    </div>                  
                <!-- button div -->
            <div  class="md:space-x-2 flex justify-center m-10">
                <button @click.prevent="createClass()" :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-text-btn rounded outline-none align-cente">Create</button>
                <button @click.prevent="cancelClass()" :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-background-secondary transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-white rounded outline-none align-cente">Cancel</button>

            </div>
        <!-- button div-->
        </div>
</div>
</template>

<script>

export default {
     components: {
  },
    data() {
      return{
          title:'',
          desc:'',
          course:'',
          dept:'',
          division:'',
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
        async createClass(){
            await this.$store.dispatch('TEACHERCLASSROOM',{
                title:this.title,
                desc:this.desc,
                course:this.course,
                dept:this.dept,
                division:this.division,
                    
            })
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log("Classroom.vue"+error)
            })
        },
        // cancelSchedule(){
        //     localStorage.removeItem("isFromScrape")
        //     localStorage.removeItem("MCQs")
        //     this.$router.push("/TeachersDashboard/")
        // }
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
