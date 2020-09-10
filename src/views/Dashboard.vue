<template>
<div>
    <h1 v-if="isProfileComplete === true" class="text-yellow">Welcome to dashboard</h1>
    <Profile v-else/>
    
</div>
</template>
<script>
// import {verifyAndLoginOAuth2Code} from '../services';
import Profile from '@/components/Profile.vue';
export default{
    name:'Dashboard',
    components:{
        Profile
    },
    computed:{
        isProfileComplete(){
            return localStorage.getItem("isProfileCompleted")
        }
    },
    data(){
        return{
           
        }
    },
    async created(){
    //  if(this.$route.query.code){
    //     console.log("inside google")
    //     var oauth2_code = this.$route.query.code 
    //     await verifyAndLoginOAuth2Code(oauth2_code);
    // }            
    }
    
}
</script>