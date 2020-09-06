<template>
<!-- main background -->
<div class="px-0 py-5 flex flex-col w-screen h-full bg-background-primary md:justify-around md:content-center md:items-cente">
<!-- first div -->
    <div class="px-0 py-5 flex flex-col w-screen h-full bg-background-primary md:justify-around md:content-center md:items-center md:px-0">

      <div class="px-5 py-5 w-full h-5/6 mt-20 md:mt-2 md:w-1/3  rounded-lg my-4 items-center md:flex-row md:content-center md:items-center">

        <div class="bg-blue-100 rounded-lg w-auto p-8 ">

<!-- heading -->
          <h1 class="font-hairline mb-8 text-background-secondary text-center text-5xl md:justify-around md:content-center md:items-center ">Registration</h1>
            <div class="border-teal p-8 border-t-12 bg-white mb-8 rounded-lg shadow-lg md:h-4/5">
            <div class="mb-4">
                    <input required type="email" v-model="email" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline " placeholder="Your Username">
                </div>
            <div class="my-3">
                <input v-model="email" type="email" placeholder="Email" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
                <input v-model="password" type="password" placeholder="Password" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
              </div>
            <div class="my-6 flex">
              <button class="border rounded w-1/2 border-background-primary md:w-full py-2 hover:bg-background-secondary hover:text-white text-black font-bold py-2 px-4 rounded outline-none" @click.prevent="register">REGISTER</button>
              <router-link :to="Login" class="border rounded w-1/2 md:w-full py-2 border-blue-700 bg-blue-600 text-white ml-2">SIGN IN ?</router-link>
            </div>
          </div>
        </div>
      </div>
        <!-- <div class="lg:w-1/2 ">
          <img src="../assets/architecture-1869211_1280.jpg" alt="" class="w-full h-full  object-cover" />
        </div> -->
      </div>
    </div>

</template>

<script>
export default {
  name:'Register',
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