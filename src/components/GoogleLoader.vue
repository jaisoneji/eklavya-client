<template>
<div>
    <h1 class="text-yellow">Loading...</h1>
</div>
</template>
<script>
import {verifyAndLoginOAuth2Code} from '../services';

export default{
    name:'GoogleLoader',
    data(){
        return{
            token:''
        }
    },
    async created(){
        var oauth2_code = this.$route.query.code 
        const data = await verifyAndLoginOAuth2Code(oauth2_code);
        this.token=data.token
        localStorage.setItem('token',this.token)
        
    },
    
}
</script>