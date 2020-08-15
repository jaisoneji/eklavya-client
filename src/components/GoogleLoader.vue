<template>
<div>
    <Loader v-if="!isLoggedIn"/>
    <h1 class="text-yellow" v-if="isLoggedIn">Welcome to Dashboard</h1>
    
</div>
</template>
<script>
import Loader from '@/components/Loader.vue'
import {verifyAndLoginOAuth2Code} from '../services';

export default{
    name:'GoogleLoader',
    components:{
        Loader
    },
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