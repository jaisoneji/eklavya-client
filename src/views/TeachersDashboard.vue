<template>
<div>
    <div class="w-full h-screen">
        <SideBar />
    </div>  
</div>
</template>
<script>
import SideBar from '@/components/TeachersComponents/SideBar.vue';
// import Loader from '@/components/Loader.vue';
export default{
    name:'TeachersDashboard',
    components:{
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
               
    }
    
}
</script>