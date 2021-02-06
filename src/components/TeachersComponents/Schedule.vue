<template>
    <!-- main background -->
<div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary md:flex-row " :class="theme">
    <!-- first div -->
        <div class="flex justify-center items-center flex-col rounded-lg  w-11/12 h-132 bg-background-secondary md:w-1/2 md:h-132"   :class="theme">
            
             <!-- heading -->
            <h1 class="text-white text-center mt-4 font-hairline text-5xl"  :class="theme">Schedule Form</h1>
            
            <!-- Name -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="text" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Form Name">
                </div>
            <!-- name ends -->
            
            
                <div  class="flex flex-row">
                      
                      <!-- course -->
                        <div class="mr-6 mt-10 inline-block relative w-18">
                            <select v-model="course" class=" text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
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
                        <div class="mt-10 inline-block relative ">
                            <select v-model="Dept" class=" text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">DEPT</option>
                                <option value="CMPN">CMPN</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="5 -2 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>
                        </div>
                        <!-- dept ends-->
                    </div>
                    <!-- time picker -->
                    <div class="flex flex-row mt-10 "><div class="oye-timepicker">
                        <div class="p-1 text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow">
                        <select  name="" id="">
                            <option  v-for="n in 12" :value="n" :key="n">{{n}}</option>
                        </select>
                        </div>
                        <div class="p-1 text-white text-xl ">:</div>
                        <div class="p-1 text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow">
                        <select name="" id="">
                            <option  v-for="n in 60" :value="n" :key="n">{{n}}</option>
                        </select>
                        </div> 

                        <div class="p-1 ml-4 text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow">
                        <select name="" id="">
                            <option  value="am" >AM</option>
                            <option value="pm" >PM</option>
                        </select>
                        </div>
                        </div>
                     </div>
                    <!-- time picker -->
                    <!-- date picker -->
                    <div class="flex flex-row mt-10 "><div class="oye-timepicker">
                        <div class="p-1 text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow">
                        <select  name="" id="">
                            <option  v-for="n in 31" :value="n" :key="n">{{n}}</option>
                        </select>
                        </div>
                        <div class="p-1 text-white text-xl ">:</div>
                        <div class="p-1 text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow">
                        <select name="" id="">
                            <option  v-for="n in 12" :value="n" :key="n">{{n}}</option>
                        </select>
                        </div> 
                        <div class="p-1 text-white text-xl ">:</div>
                        <div class="p-1 text-background-secondary appearance-none bg-white border border-white px-6 py-2 rounded-lg shadow">
                        <select name="" id="">
                            <option  v-for="n in 2007" :value="n" :key="n">{{n}}</option>
                        </select>
                        </div>
                        </div>
                     </div>
                    <!-- date picker -->
            <!-- message -->
                <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input required type="text" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Message">
                </div>
                <!-- message ends -->
                <!-- button div -->
            <div class="flex justify-center mt-10">
                <button class="flex font-bold text-xl w-32 h-14 items-center justify-center bg-background-primary text-text-secondary rounded outline-none align-center">Schedule</button>
            </div>
        <!-- button div-->
                

        </div>
</div>
</template>

<script>
export default {
    data() {
      return{
          
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
}
}
</script>

<style>
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

.oye-timepicker {
  display: flex;
  flex-direction: row;
}

.p-1 {
  padding: 5px;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}
</style>
