<template>
  
      <button v-if="theme === 'theme-light'" @click.prevent="toggleTheme" class="focus:outline-none focus:bg-none mt-8 mr-6 absolute top-0 right-0"><img src="@/assets/moon.png" class="focus:outline-none focus:bg-none w-1/2"/></button>
      <button v-else @click.prevent="toggleTheme" class="focus:outline-none focus:bg-none mt-8 mr-6 absolute top-0 right-0"><img src="@/assets/sun.png" class="focus:outline-none focus:bg-none w-1/2"/></button>

</template>

<script>
export default {
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
    data(){
        return{
            
        }
    },
    methods:{
        toggleTheme(){
           this.$store.dispatch('TOGGLEMODE')
    }
}}
</script>

<style>
/* button{
    background: none;
} */
</style>