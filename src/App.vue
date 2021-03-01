<template>
  <div id="app" class="w-screen h-screen overflow-hidden">
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
