<template>
<div>
    <h1 class="text-yellow">Loading...</h1>
</div>
</template>
<script>
import {verifyAndLoginOAuth2Code} from '../services';

export default{
    name:'GoogleLoader',
    async created(){
        var oauth2_code = this.$route.query.code 
        console.log(oauth2_code);
        const data = await verifyAndLoginOAuth2Code(oauth2_code);
        console.log(data);
    }
}
</script>