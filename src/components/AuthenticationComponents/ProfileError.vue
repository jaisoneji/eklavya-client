<template>
    <!-- main div screen -->
    <div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">
        
        
        <!-- first div -->
                <div class="flex flex-col md:flex-row  justify-center items-center content-center align-center md:w-screen md:h-screen" >
                 
                 <!-- img div -->
                    <div class="flex flex-row  md:w-1/2 md:h-11/12">
                        <img class="flex m-auto" src="@/assets/profile_analysis_.png"/>   
                    </div>
                    <!-- img div ends-->
                    
                    <!-- content div -->
                    <div class="flex  flex-col w-11/12 justify-center align-center items-center content-center md:w-1/2">
                        <!-- content start -->
                        <div  class="flex flex-row font-sans items-center font-bold justify-center mt-20 text-text-text  text-2xl">
                            <p class="text-center">Looks like Profile is incomplete !</p>
                        </div>
                          <!-- content ends -->
                          <!-- button start -->
                           <div @click.prevent="hideError()" class=" md:w-2/5 flex flex-row mt-6  border-bg-primary bg-background-secondary rounded-full w-3/4 h-12 justify-center items-center">
                                <button class="focus:outline-none flex  text-2xl  text-white   font-bold  rounded outline-none align-center " :class="theme">Complete Profile</button>
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
        hideError(){
            this.$emit('hideError')
        }
    }
}
</script>

<style>

</style>