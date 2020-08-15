<template>
<!-- main background -->
<div class="h-full bg-background-primary">
<!-- first div -->
    <div class="flex items-center justify-center h-full">

      <div class="flex max-w-3xl">

        <div class="bg-blue-100 rounded-lg w-auto p-8 ">

<!-- heading -->
          <h1 class="text-blue-700 text-3xl text-center mb-4">Registration</h1>
            <div class="my-3">
              <input v-model="name" type="text" placeholder="Username" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
                <input v-model="email" type="email" placeholder="Email" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
                <input v-model="password" type="password" placeholder="Password" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
              </div>
            <div class="my-6 flex">
              <button class="border rounded w-1/2 border-blue-700 md:w-full py-2" @click.prevent="register">REGISTER</button>
              <button class="border rounded w-1/2 md:w-full py-2 border-blue-700 bg-blue-600 text-white ml-2">SIGN IN</button>
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