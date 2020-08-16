<template>
<div class="px-0 py-5 flex flex-col w-screen h-full bg-background-primary md:justify-around md:content-center md:items-center ">
  <Loader v-if="isLoading"/>
  <div v-else class="px-0 py-5 flex flex-col w-screen h-full bg-background-primary md:justify-around md:content-center md:items-center md:px-0">
    <div  class=" px-5 py-5 w-full h-5/6 mt-20 md:mt-2 md:w-1/3 bg-gray-200 rounded-lg my-4 items-center md:flex-row md:content-center md:items-center">
  
            <h1 class="font-hairline mb-8 text-background-secondary text-center text-5xl md:justify-around md:content-center md:items-center ">Login</h1>
            <div class="border-teal p-8 border-t-12 bg-white mb-8 rounded-lg shadow-lg md:h-4/5">
                <div class="mb-4">
                    <label class="font-bold text-black block mb-2 ">Email</label>
                    <input required type="email" v-model="email" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username">
                </div>

                <div class="mb-4">
                    <label class="font-bold text-black block mb-2">Password</label>
                    <input required type="password" v-model="password" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password">
                </div>

                <div class="flex items-center justify-between">
                    <button @click.prevent="login"  class="border border-black hover:bg-background-secondary hover:text-white text-black font-bold py-2 px-4 rounded">
                        Login
                    </button>
  

                    <a class="no-underline inline-block align-baseline font-bold text-sm text-black hover:text-black float-right" href="#">
                        Forgot Password?
                    </a>
                </div>
                
            </div>
            <div class="text-center">
                <p class="text-black text-sm">Don't have an account? <a href="#" class="no-underline text-blue font-bold">Create an Account</a>.</p>
            </div>
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