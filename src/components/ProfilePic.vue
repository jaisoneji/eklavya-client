<template>
  <div class="background-back h-32 flex flex-col justify-center items-center">
        <div class="bg-white rounded-full h-24 w-24 items-center justify-center flex">
          <img class="h-full w-full rounded-full" :src="imageurl" alt="">
        </div>
        <p class="mt-4 text-xl text-white ">{{name}}</p>
  </div>
</template>

<script>
export default {
    async mounted(){
        if(await this.$store.getters.getMethod === 'OAuth2'){
            this.imageurl = await this.$store.getters.getPicture
        }
        this.name = await this.$store.getters.getName
    },
    data(){
        return{
            imageurl:'',
            name:''
        }
    }
}
</script>

<style>
.background-back{
    background-color: #2A2A2E;
}
</style>