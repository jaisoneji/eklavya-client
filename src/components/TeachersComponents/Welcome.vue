<template class="">
  <div :class="theme" class="h-screen w-screen bg-background-primary flex justify-center align-center">
      <div class="flex flex-col md:mt-16 mt-12 align-center items-center md:space-y-2">
          <h2 :class="theme" class="font-mono text-text-text txt-bold text-4xl">Welcome!</h2>
          <div class="p-4 flex items-center border border-background-border md:w-8/12">
              <p class="text-center text-text-text font-mono text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique tenetur pariatur? Provident optio doloremque tempora ad. Consequatur id quaerat amet, excepturi odio nam optio porro, eos modi nostrum perferendis?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo culpa ipsum ratione natus vel eaque magni delectus consequatur in laborum perferendis dicta amet, sunt incidunt repellendus minima! Molestiae, aspernatur enim.
              </p>
          </div>
      </div>
  </div>
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
    }
}
</script>

<style>

</style>