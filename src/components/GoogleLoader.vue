<template>
<div>
    <h1 v-if="isLoggedIn">Welcome to dashboard</h1>
    <h1 class="text-yellow" v-if="!isLoggedIn">Loading...</h1>
    
</div>
</template>
<script>
import {verifyAndLoginOAuth2Code} from '../services';

export default{
    name:'GoogleLoader',
    computed:{
        isLoggedIn: function(){
           return  this.$store.getters.isLoggedIn
        }
    },
    data(){
        return{
           
        }
    },
    async created(){
     if(this.$route.query.code){
        var oauth2_code = this.$route.query.code 
        await verifyAndLoginOAuth2Code(oauth2_code);
    }
           
    },
    
}
</script>