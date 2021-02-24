<template>
  <div @click.prevent="logout()" :class="theme" class="cursor-pointer align-center flex justify-center text-text-text absolute top-0 right-0 mt-4 mr-20 bg-background-secondary text-center rounded-lg  w-20 h-8">
        <p class="text-white focus:outline-none">Logout</p>
    </div>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
    methods:{
        logout(){
            localStorage.clear()
            VueCookies.remove("token")
            this.$router.push('/')
        
        },
    }
}
</script>

<style>

</style>