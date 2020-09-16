<template>
<div>
    <Loader v-show="Loader"/>
    <h1 v-if="isProfileComplete === true" class="text-yellow">Welcome to dashboard</h1>
    <Profile @confirm="confirm()" v-else/>
    
</div>
</template>
<script>
// import {verifyAndLoginOAuth2Code} from '../services';
import Profile from '@/components/Profile.vue';
import Loader from '@/components/Loader.vue';

export default{
    name:'Dashboard',
    components:{
        Profile,
        Loader
      
    },
    computed:{
        isProfileComplete(){
            console.log(this.$store.getters.getProfileStatus)
           return this.$store.getters.getProfileStatus
        },
        Loader(){
            return this.isLoading
        }
    },
    data(){
        return{
           isLoading:false
        }
    },
    methods:{
        confirm(){
            this.isLoading=true
            this.$store.dispatch('CONFIRM_PROFILE',{
                RegisterAs:this.RegisterAs,
                Sem:this.Sem,
                Dept:this.Dept,
                Class:this.Class,
                mobileno:this.mobileno,
                uid:this.uid
            })
            .then(response=>{
                console.log(response)
                this.isLoading=false
                
            })
            .catch(error=>{
                console.log(error)
            })
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