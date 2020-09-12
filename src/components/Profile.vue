<template>
<div class="flex w-screen h-screen bg-background-primary md:justify-center md:content-center md:align-center md:items-center" :class="theme">
    <ProfileError @hideError="hideError()" v-if="toggleError==false" />
    <div v-else class="flex w-screen h-full bg-background-primary md:justify-center md:content-center md:align-center md:items-center " :class="theme">
      
      <div class=" flex flex-col md:flex-row md:justify-center md:content-center md:align-center md:items-center ">
          <!-- Form div starts here -->
      <div class=" px-5 md:py-10 w-full h-5/6 mt-20 md:mt-10 md:w-1/3  my-1 items-center md:flex-row md:content-center md:items-center">
        <!-- <div class="flex items-center text-white ">
            Full Name:
        </div>
            <div class="border-b border-white py-1">
                <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name">
            </div> -->
            <div class="flex flex-col">
                <span class="text-white">Register As:</span>
                <div class="mt-5">
                    <label class="inline-flex items-center text-white">
                    <input type="radio" class="form-radio" name="Registeras" value="student">
                    <span class="ml-2">Student</span>
                    </label>
                    <label class="inline-flex items-center text-white ml-16">
                    <input type="radio" class="form-radio" name="Registeras" value="teacher">
                    <span class="ml-2">Teacher</span>
                    </label>
                </div>
            </div>
        <div class="flex items-center text-white mt-5 md:mt-10">
            Roll No.
        </div>
            <div class="border-b border-white py-1">
                <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name">
            </div>
        
        <div class="mt-10 p-2 inline-block relative w-18">
            <select class=" text-white appearance-none bg-background-primary border border-white px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                <option>SEM</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-white">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <div class="mt-10 p-2 inline-block relative w-18">
            <select class=" text-white appearance-none bg-background-primary border border-white px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                <option>DEPT</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-white">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
       <div class="mt-10 p-2 inline-block relative w-18">
            <select class=" text-white appearance-none bg-background-primary border border-white px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" :class="theme">
                <option>CLASS</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <div class="flex items-center text-white mt-5">
        Mobile Number:
        </div>
        <div class="border-b border-white py-1">
            <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name">
        </div>
        <div class="flex justify-end ">        
            <div class="mt-3 w-1/3 p-2">
                    <button class="border border-white text-white font-bold py-1 px-4 rounded" >
                            Confirm
                    </button>
            </div>         
        </div>
    </div>
    <!-- Image div -->
    <div class=" w-full md:w-1/2 md:align-center md:pl-6" >
        <img src="@/assets/clip-sign-up.png"/>   
    </div>   
    <!-- ends here    -->
  </div>
</div>
</div>
</template>

<script>
import ProfileError from '@/components/ProfileError.vue';

export default {
    components:{
          ProfileError
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
    }
    },
    data(){
        return{
            showForm:false
        }
    },
    methods:{
        hideError(){
            this.showForm = true
        }
    }
}
</script>

<style>

</style>