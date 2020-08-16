<template>
<div>
    <h1 class="text-yellow">Welcome to dashboard</h1>
    
</div>
</template>
<script>
// import {verifyAndLoginOAuth2Code} from '../services';

export default{
    name:'Dashboard',
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