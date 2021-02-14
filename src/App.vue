<template>
  <div id="app" class="theme-dark w-screen h-screen overflow-x-hidden">
    <div class="w-full h-2 bg-background-secondary"></div>
    <Mode/>
    <router-view />
    
  </div>
</template>
<script>
import Mode from '@/components/Mode.vue'
// import VueCookies from 'vue-cookies'

export default {
  components:{
    Mode
  },
  mounted(){
  
  }
}
</script>

<style>

</style>
