<template>
    <div @click.prevent="login" class="cursor-pointer active:bg-background-pressed disabled:bg-background-disbaled mt-2 hover:shadow-btn outline-none border google-btn w-1/2 h-12 bg-background-google m-auto flex flex-row items-center align-center md:w-1/3">
            <div class="h-full google-icon-wrapper w-12 flex items-center justify-center bg-white">
                <img class="google-icon h-6 flex" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>

            <p class="btn-text flex-1 text-text-google px-1"><b>Sign in with google</b></p>
    </div>
</template>

<script>
import {verifyAndLoginOAuth2Code} from '@/services'
import VueCookies from 'vue-cookies'

export default {
    name:'GoogleLogin',
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
    async login() {
    try{ 
        const authCode = await this.$gAuth.getAuthCode()
        const res=await verifyAndLoginOAuth2Code(authCode)
        console.log(res)
        let expires = (new Date(Date.now()+ 43200*1000)).toUTCString();
        VueCookies.set("token",res.data.token,expires);
        this.$store.commit('setToken',res.data.token)
        this.$store.commit('setUserDetails',res.data.user_data)
        this.$router.push('/TeachersDashboard/')
    }
    catch(error){
         console.log("GoogleLogin.vue"+error)
     }
   }
    }
   

}
</script>

<style scoped>
.btn-text{
    font-family: 'Roboto';
    font-size: 17px;
    letter-spacing: 0.2px;
}
</style>