<template>

  <div class="LoginButton flex flex-row hover:bg-background-secondary w-1/2 m-auto mt-2 md:w-1/3">
        <img src="https://img.icons8.com/plasticine/50/000000/google-logo.png"/>
        <!-- <button id="GoogleButton" class=" text-white text-2xl px-4 py-2 w-1/2 focus:outline-none md:align-center md:pl-6" @click="googleLogin">Google</button> -->
        <a id="GoogleButton" class=" text-white text-2xl px-4 py-2 w-1/2 focus:outline-none md:align-center md:pl-6" @click.prevent="login">Google</a>

    </div>
</template>

<script>
import {verifyAndLoginOAuth2Code} from '@/services'
export default {
    name:'GoogleLogin',
    props:['googleLink'],
    data(){
        return{
            
        }
    },
    methods:{
    async login() {
    try{
        const authCode = await this.$gAuth.getAuthCode()
        const response=await verifyAndLoginOAuth2Code(authCode)
        console.log(response.data)
        localStorage.setItem('token',response.data.token)
        this.$store.commit('setToken',response.data.token)
        this.$store.commit('setUserDetails',response.data.user)
        this.$router.push('/Dashboard')

    }
    catch(error){
        localStorage.removeItem('token')
        console.log(error)
    }}}}
</script>

<style>

</style>