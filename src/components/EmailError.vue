<template>
    <!-- main div screen -->
    <div class="flex justify-center align-center items-center content-center w-screen h-full bg-background-primary" :class="theme">
        
        
        <!-- first div -->
                <div class="flex flex-col md:flex-row  justify-center items-center content-center align-center md:w-11/12">
                 
                 <!-- img div -->
                    <div class=" flex flex-row w-11/12  md:w-1/2 ">
                        <img class=" md:h-184 " src="@/assets/email_pending.png"/>   
                    </div>
                    <!-- img div ends-->
                    
                    <!-- content div -->
                    <div class="flex  flex-col w-11/12 justify-center align-center items-center content-center md:w-1/2">
                        <!-- content start -->
                        <div  class="flex flex-row font-sans justify-center  items-center  font-bold  mt-20 text-text-text  text-2xl">
                            <p class="text-center">Looks like you have not verified your email !Go to your gmail to Verify </p>
                        </div>
                        <div  class="flex flex-row font-sans justify-center  items-center  font-bold  mt-20 text-text-text  text-xl">
                            <p class="text-center">Click below after verification</p>
                        </div>
                          <!-- content ends -->
                          <!-- button start -->
                           <div @click.prevent="fetchData()" class=" md:w-2/5 flex flex-row mt-6  border-bg-primary bg-background-secondary rounded-full w-3/4 h-12 justify-center items-center">
                                <button class="flex  text-2xl  text-white   font-bold  rounded outline-none align-center" :class="theme" >Done</button>
                            </div>
                          <!-- button ends -->
                    </div>
                    <!-- contentdiv ends -->
               
               
                </div>
        <!-- close fisrt div -->

    </div>
    <!-- close  -->
</template>


<script>
export default {
computed:{
    theme(){
        if(this.$store.getters.getMode === 'theme-dark'){
            return 'theme-dark'
        }
        else{
            return 'theme-light'
        }
        }
    },
    methods:{
        async fetchData(){
            await this.$store.dispatch('FETCH_DATA')
            .then((response)=>{
                console.log("Log from EmailError"+response)
                this.$router.push('/TeachersDashboard')
            })
            .catch((error)=>{
                console.log("Error from EmailError"+error)
            })
        }
    }
}
</script>

<style>

</style>