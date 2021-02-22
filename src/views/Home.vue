<template>
  <div :class="theme" class=" w-screen h-screen bg-background-primary flex flex-col md:flex-row-reverse overflow-x-hidden md:justify-center md:items-center">
    
    <!-- Landing Image pencile -->
    <div class="h-1 my-0 flex-1 md:w-1/2 md:h-screen flex"><img src="@/assets/LandingImage.png" class="md:w-2/3 md:m-auto md:items-center flex" /></div>
    <!-- Div with message and buttons -->
    <div class="mt-0 text-center flex-1 flex-col md:w-1/2">
      <p :class="theme" class="eklavya text-text-text text-4xl">eklavya</p>
      <p :class="theme" class="text-text-text text-xl px-8 font-sans">A automated app for Conducting Quizzes and tests</p>
      <div class="buttons flex flex-col my-4 items-center md:mt-8 md:w-3/4 md:flex-row md:items-center md:m-auto">
        <!-- Login button -->
        <router-link to="Login" :class="theme" class="flex-1 bg-background-secondary LoginButton md:mr-4 w-1/2">
            <button id="myButton" :class="theme" class=" text-white text-2xl px-4 py-2 focus:outline-none md:px-8 md:text-center ">Sign In</button>
        </router-link>
        <!-- Register Buton -->
        <router-link to="Register" :class="theme" class="bg-background-secondary mt-2 flex-1 md:mt-0 LoginButton w-1/2">
            <button id="myButton" :class="theme" class=" text-white text-2xl px-4 py-2 focus:outline-none md:px-8 md:text-center">Register</button>
        </router-link>
      </div>
      
      <hr class="w-1/2 m-auto md:mt-4 md:m-auto ">
      <!-- Google Sign in button -->
      <GoogleLogin/>
      <!-- <button @click="login()"> GOogle </button> -->

    </div>
    
    
  </div>
</template>

<script>

// import queryString from 'query-string'
import GoogleLogin from '../components/AuthenticationComponents/GoogleLogin.vue'
import {checkServerStatus} from '../services/index';
// import { mapState } from 'vuex';
// @ is an alias to /src
export default {
  name: 'Home',
  async mounted(){
    const status = await checkServerStatus();
    console.log(status);
  },

  components: {
    GoogleLogin
    
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
  // watch: {
  //   theme(newTheme, oldTheme) {
  //     // Do whatever makes sense now
  //     if (newTheme === 'theme-dark') {
  //       this.theme = 'theme-dark'
  //     }else{
  //       this.theme='theme-light'
  //     }
  //   },
  // },
  data(){
      return {
        

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