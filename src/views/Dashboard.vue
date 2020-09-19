<template>
<div>
    <!-- <h1 v-if="isProfileComplete === true" class="text-yellow">Welcome to dashboard</h1> -->
    <!-- <Dash v-if="isProfileComplete === true"/>
    <Profile v-else/> -->
    <Dash />
    
    
</div>
</template>
<script>
// import {verifyAndLoginOAuth2Code} from '../services';
// import Profile from '@/components/Profile.vue';
import Dash from '@/components/Dash.vue';
export default{
    name:'Dashboard',
    components:{
        // Profile,
        Dash
      
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