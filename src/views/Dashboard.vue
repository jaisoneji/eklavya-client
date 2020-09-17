<template>
<div>
    <!-- <Loader v-show="Loader"/> -->
    <h1 class="text-yellow">Welcome to dashboard</h1>
    
    
</div>
</template>
<script>
// import {verifyAndLoginOAuth2Code} from '../services';
// import Loader from '@/components/Loader.vue';

export default{
    name:'Dashboard',
    components:{
        // Loader
      
    },
    computed:{
        // isProfileComplete(){
        //     console.log(this.$store.getters.getProfileStatus)
        //    return this.$store.getters.getProfileStatus
        // },
        // Loader(){
        //     return this.isLoading
        // }
    },
    data(){
        return{
        //    isLoading:false
        }
    },
    methods:{
       
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