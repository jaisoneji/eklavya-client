<template>
<!-- main background -->
<div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary md:flex-row " :class="theme">
<ProfileError @hideError="hideError()" v-if="toggleError===false" />             
    <div v-else v-show="!isLoading" class=" flex  justify-center align-center items-center content-center md:w-1/2 w-full md:h-screen" >
        <!-- first div -->
        <div class="flex justify-center items-center flex-col rounded-lg  w-11/12 h-132 bg-background-secondary md:w-1/2 md:h-132"   :class="theme">
             <!-- heading -->
            <h1 class="text-white text-center mt-4 font-hairline text-5xl"  :class="theme">Profile</h1>
            <!-- Register as  -->
                <div class="mt-10 px-3 inline-block relative w-18 h-8">
                            <select v-model="RegisterAs" class="text-background-secondary appearance-none bg-white border border-white px-8 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">Register as: </option>
                                <option value="Teacher">Teacher</option>
                                <option value="Student">Student</option>
                            </select>
                             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                <!--  Register as radio -->
                    
                <!-- fields -->
                <div class="flex flex-col w-full items-center ">    
                    <div class=" flex flex-row">
                        <!-- sem -->
                        <div class="mr-2 mt-10 inline-block relative w-18">
                            <select v-model="Sem" class=" text-background-secondary appearance-none bg-white border border-white px-4 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">SEM</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <!-- sem ends -->

                        <!-- dept -->
                        <div class="mt-10 inline-block relative w-18">
                            <select v-model="Dept" class=" text-background-secondary appearance-none bg-white border border-white px-4 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">DEPT</option>
                                <option value="CMPN">CMPN</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <!-- dept ends-->

                        <!-- class -->
                        <div class="mt-10 ml-2 inline-block relative w-18">
                            <select v-model="Class" class=" text-background-secondary appearance-none bg-white border border-white px-4 py-2 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                                <option disabled value="">CLASS</option>
                                <option value="D17A">D17A</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-background-secondary" :class="theme">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <!-- class ends-->
                    </div>

                       <!-- Roll no div -->
                    <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 mt-10 justify-center items-center">
                                <input v-model="uid" required type="number" class="flex-1 border rounded-full w-full py-2 px-6 outline-none focus:shadow-outline " placeholder="Roll No/ Staff id">
                    </div>
                    <!-- Roll no div -->

                    <!-- Mobile no -->
                    <div :class="theme" class="flex flex-row w-11/12 md:w-9/12 justify-center items-center mt-10">
                                <input v-model="mobileno"  required type="tel" class="border rounded-full w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Mobile Number">
                    </div>
                    <!-- Mobile no ends-->

                      <!-- confirm button -->
                    <div :class="theme" @click.prevent="confirm()" class="mt-10 flex flex-row border bg-white rounded-full w-1/2 h-12 justify-center items-center  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline ">
                        <button class="flex font-bold text-xl text-text-btn rounded outline-none align-center " :class="theme">Confirm</button>
                        <img src="@/assets/tick.png" class="h-8 w-8 ml-4 align-center color-white  color-white" />
                    </div>
                    <!-- confirm button ends-->


                </div>

        </div>

     </div>
    
    <!-- landing -->
    <div class="   hidden md:block md:w-1/2 md:h-11/12   ">
        <img src="@/assets/clip-sign-up.png" class=" flex md:w-3/4 m-auto " />
    </div>
    <Loader v-show="isLoading" />
</div>
</template>

<script>
import ProfileError from '@/components/ProfileError.vue';
import Loader from '@/components/Loader.vue';

export default {
    components:{
          ProfileError,
          Loader
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
    toggleError(){
        return this.showForm
    },
    isLoading(){
        return this.Loading
    }
    },
    data(){
        return{
            showForm:false,
            Loading:false,
            RegisterAs:'',
            Sem:'',
            Dept:'',
            Class:'',
            mobileno:'',
            uid:''
        }
    },
    methods:{
        hideError(){
            this.showForm = !this.showForm
        },
        confirm(){
            this.$emit("confirm")
                        // this.Loading=true
            //   
        }
    }
}
</script>

<style>

</style>