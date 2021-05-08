<template>
  <div @click.prevent="logout()" :class="theme" class="mt-8 cursor-pointer align-center flex align-center justify-center text-text-text  text-center rounded-lg  w-full h-10">
        <p class="text-xl font-semibold bg-background-secondary rounded-lg w-11/12 text-white focus:outline-none h-full align-center justify-center items-center flex">Logout</p>
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