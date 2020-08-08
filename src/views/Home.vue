<template>
  <div class="container h-full bg-background-primary flex flex-col ">
    <img src="@/assets/LandingImage.svg" class="h-1/2 flex-1"/>
    <div class="message h-2/4 text-center flex-1 flex-col">
      <p class="eklavya text-white text-4xl">eklavya</p>
      <p class="text-white text-xl px-8 font-sans">A automated app for Conducting Quizzes and tests</p>
      <div class="buttons flex flex-col my-4">
        <router-link to="Login" class="">
            <button id="myButton" class="LoginButton text-white text-2xl px-4 py-2 w-1/2">Login</button>
        </router-link>
        <!-- Register Buton -->
        <router-link to="Register" class="mt-2">
            <button id="myButton" class="LoginButton text-white text-2xl px-4 py-2 w-1/2">Register</button>
        </router-link>
      </div>


    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
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