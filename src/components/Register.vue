<template>
<!-- main background -->
<div class="flex justify-center align-center items-center content-center w-screen h-full bg-background-primary md:flex-row " :class="theme">

    
            
    <div class=" flex justify-center align-center items-center content-center md:w-1/2 w-full md:h-screen" >
        
        <!-- first div -->
        <div class="flex  justify-center items-center flex-col rounded-lg  w-11/12 h-132 bg-background-secondary md:w-1/2 md:h-132"   :class="theme">
                    
            <!-- heading -->
            <h1 class="text-white text-center mt-4 font-hairline text-5xl"  :class="theme">Register</h1>
                    
                <!-- fields -->
                <div class="flex flex-col w-full items-center mt-6  ">
                        
                    <div :class="theme" class="flex flex-row w-10/12 justify-center items-center">
                                <img src="@/assets/name.png" class="h-8 w-8  align-center color-white mr-4" />
                                <input v-model="name" required type="text" class="flex-1 border rounded-lg w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Full Name">
                    </div>

                    <div :class="theme" class="flex flex-row w-10/12 justify-center items-center mt-6">
                                <img src="@/assets/email.png" class="h-8 w-8  align-center color-white mr-4" />
                                <input v-model="email"  required type="email" class=" border rounded-lg w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="VES Email">
                    </div>

                    <div :class="theme" class="flex flex-row w-10/12 justify-center items-center mt-6">
                                <img src="@/assets/pass.png" class="h-8 w-8  align-center color-white mr-4" />
                                <input v-model="password"  required type="password" class="border rounded-lg w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Password">
                    </div>

                    <div :class="theme" @click.prevent="register()" class="mt-6 flex flex-row border bg-white rounded-full w-1/2 h-12 justify-center items-center  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline ">
                                <button class="flex font-bold text-xl text-text-btn rounded outline-none align-center " :class="theme">Confirm</button>
                                <img src="@/assets/tick.png" class="h-8 w-8 ml-4 align-center color-white  color-white" />
                    </div>

                    <h1 class="text-white mt-8 " :class="theme">Already Registered?<a href="Login">Login Now</a></h1>

                </div>

        </div>

     </div>
    
    <!-- landing -->
    <div class="   hidden md:block md:w-1/2 md:h-11/12   ">
        <img src="@/assets/register.png" class=" flex md:w-3/4 m-auto " />
    </div>
    
</div>





</template>


<script>
export default {
  // name:'Register',
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
  data(){
    return{
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    register(){
      console.log(this.name)
      this.$store.dispatch('REGISTER',{
        name:this.name,
        email:this.email,
        password:this.password
      })
      .then(response=>{
        console.log("Register.vue Response"+response)
        this.$router.push('/Login')
      })
      .catch(error=>{
        console.log("Registration.vue error"+error)
      })
    }
  }

}
</script>

<style>

</style>