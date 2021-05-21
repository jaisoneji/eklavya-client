<template>
  <div @click.prevent="deleteProfile()" :class="theme" class="cursor-pointer align-center flex justify-center text-text-text mt-4  text-center   w-full h-10">
        <p class="text-xl font-semibold bg-red-600 rounded-lg w-11/12 text-white focus:outline-none h-full align-center justify-center items-center flex">Delete Profile</p>
    </div>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
    methods:{
        async deleteProfile(){
            try{
                let email = localStorage.getItem('email')
                let data = await this.$store.dispatch('DELETE_USER',email)
                console.log(data)
                localStorage.clear()
                VueCookies.remove("token")
                this.$router.push('/')
            }catch(error){
                console.log("Error deleteing user"+error)
            }
        
        },
    }
}
</script>

<style>

</style>