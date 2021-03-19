<template>
  <div @click.prevent="deleteProfile()" :class="theme" class="cursor-pointer align-center flex justify-center text-text-text mt-4 mr-20text-center   w-full h-8">
        <p class="w-11/12 bg-red-700 text-white focus:outline-none  rounded-lg text-center">Delete Profile</p>
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