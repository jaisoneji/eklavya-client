<template>
<div class="w-full h-full">

    <!-- <h1 v-if="isProfileComplete === true" class="text-yellow">Welcome to dashboard</h1> -->
    <!-- <Dash v-if="isProfileComplete === true"/>
    <Profile v-else/> -->
    <div class="w-full h-full">
    
        <SideBar />
    </div>
    
    
</div>
</template>
<script>
// import {verifyAndLoginOAuth2Code} from '../services';

// import Profile from '@/components/Profile.vue';
import SideBar from '@/components/SideBar.vue';
// import Loader from '@/components/Loader.vue';
export default{
    name:'Dashboard',
    components:{
        // Profile,
        // Loader,
        SideBar

    
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