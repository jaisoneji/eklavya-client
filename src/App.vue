<template>
  <div id="app" class="theme-dark w-screen h-screen overflow-hidden">
    <div :class="theme" class="w-full h-2 bg-background-secondary"></div>
    <Mode/>
    <router-view />
    <div :class="theme" class="w-full h-2 bg-background-secondary absolute bottom-0"></div>
  </div>
</template>
<script>
import Mode from '@/components/Mode.vue'
export default {
  components:{
    Mode
  }
}
</script>

<style>

</style>
