<template>
  <div id="app" class="theme-dark w-screen h-screen overflow-hidden">
    <div class="w-full h-2 bg-background-secondary"></div>
    <Mode/>
    <router-view />
    
  </div>
</template>
<script>
import Mode from '@/components/Mode.vue'
export default {
  components:{
    Mode
  },
  beforeCreate(){
    

  }
}
</script>

<style>

</style>
