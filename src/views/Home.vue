<template>
  <div class="overflow-hidden w-full h-full bg-background-primary flex flex-col md:flex-row-reverse overflow-x-hidden md:justify-center md:items-center">

    <!-- Landing Image pencile -->
    <div class="h-1 my-0 flex-1 md:w-1/2 md:h-full"><img src="@/assets/LandingImage.svg" class="h-full m-auto" /></div>
    <!-- Div with message and buttons -->
    <div class="message  mt-0 text-center flex-1 flex-col md:w-1/2">
      <p class="eklavya text-white text-4xl">eklavya</p>
      <p class="text-white text-xl px-8 font-sans">A automated app for Conducting Quizzes and tests</p>
      <div class="buttons flex flex-col my-4 items-center md:mt-8 md:w-3/4 md:flex-row md:items-center md:m-auto">
        <!-- Login button -->
        <router-link to="Login" class="flex-1 hover:bg-background-secondary LoginButton md:mr-4 w-1/2">
            <button id="myButton" class=" text-white text-2xl px-4 py-2 focus:outline-none md:px-8 md:text-center ">Sign In</button>
        </router-link>
        <!-- Register Buton -->
        <router-link to="Register" class="hover:bg-background-secondary mt-2 flex-1 md:mt-0 LoginButton w-1/2">
            <button id="myButton" class=" text-white text-2xl px-4 py-2 focus:outline-none md:px-8 md:text-center">Register</button>
        </router-link>
      </div>
      
      <hr class="w-1/2 m-auto md:mt-4 md:m-auto ">
      <!-- Google Sign in button -->
      <GoogleLogin :googleLink="googleLink"/>


    </div>
    
    
  </div>
</template>

<script>
// import queryString from 'query-string'
import GoogleLogin from '../components/GoogleLogin.vue'
// @ is an alias to /src
import {getAccountLink} from '../services';

export default {
  name: 'Home',
  async mounted(){
    try{
    const data =await getAccountLink();
    this.googleLink=data.data.OAuth2URL
    }
    catch(error){
      console.log(error)
    }
     
  },

  components: {
    GoogleLogin
    
  },
  data(){
      return {
        queryLink:"",
        code : "",
        googleLink:""

      }
  },
  methods:{
   
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
.eklavya{
  font-family: 'Sriracha', cursive;
}
.LoginButton{
  border: solid white 1px;
  border-radius: 15px;

}

  
</style>