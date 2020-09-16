<template>
<div class="h-full w-screen">
<Loader v-if="Loading===true"/>
<!-- main background -->
<div class="flex justify-center align-center items-center content-center w-screen h-full bg-background-primary md:flex-row " :class="theme">
    
    <div class=" flex justify-center align-center items-center content-center md:w-1/2 w-full md:h-screen" >
        <!-- first div -->
        <div class="flex  justify-center items-center flex-col rounded-lg  w-11/12 h-132 bg-background-secondary md:w-1/2 md:h-132"   :class="theme">      
            <!-- heading -->
            <h1 class="text-white text-center mt-4 font-hairline text-5xl"  :class="theme">Sign in</h1>
                    
                <!-- fields -->
                <div class="flex flex-col w-full items-center mt-6  ">
                        
                    <div class="flex flex-row w-10/12 justify-center items-center">
                                <img src="@/assets/email.png" class="h-8 w-8  align-center color-white mr-4" />
                                <input v-model="email"  required type="email" class="flex-1 border rounded-lg w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="abc.xyz@ves.in">
                    </div>

                    <div class="flex flex-row w-10/12 justify-center items-center mt-6 ">
                                <img src="@/assets/pass.png" class="h-8 w-8  align-center color-white mr-4" />
                                <input v-model="password" required type="password" class=" border rounded-lg w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Password">
                    </div>

                    <div @click.prevent="login()" class="mt-6 flex flex-row border bg-white rounded-full w-1/2 h-12 justify-center items-center transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline">
                                <button class="flex text-xl text-text-btn font-bold rounded outline-none align-center" :class="theme">Login</button>
                                <img src="@/assets/log.png" class="h-8 w-8 ml-4 align-center color-white  color-white" />
                    </div>

                    <h1 class="text-text-text mt-8 " :class="theme">Not Yet Registered?<a href="Register">Register Now</a></h1>

                </div>

        </div>

     </div>
    
    <!-- landing -->
    <div class="   hidden md:block md:w-1/2 md:h-11/12   ">
        <img src="@/assets/authentication.png" class=" flex md:w-1/2 m-auto " />
    </div>
    
</div>
</div>
</template>

<script>
import Loader from '@/components/Loader.vue'
export default {
    name:'Login',
    components:{
        Loader
    },
    computed:{
    theme(){
        if(this.$store.getters.getMode === 'theme-dark'){
            return 'theme-dark'
        }
        else{
            return 'theme-light'
        }
        },
    Loading(){
        return this.isLoading
    }
    },
    data(){
        return{
            email:'',
            password:'',
            isLoading: false
        }
    },
    methods:{
        login(){
            this.isLoading=true
            this.$store.dispatch('LOGIN',{
                email:this.email,
                password:this.password,
            })
            .then(response=>{
                console.log(response)
                this.isLoading='false'
                this.$router.push('/Dashboard')
            })
            .catch(error=>{
                console.log(error)
            })
            
        }
    }
 
}
</script>
<style scoped>

label{
    font-family:Arial, Helvetica, sans-serif;
}
  
</style>