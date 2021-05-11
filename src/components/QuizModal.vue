<template>
  <div > 
          <div  class="fixed w-full h-full overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none justify-start items-center flex">
            <div class="relative ml-auto mr-48 md:h-184 md:w-auto">
              <!--content-->
              <div class="h-full rounded-md shadow-2xl animate-fadeIn duration-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class=" flex items-start justify-between  px-2 py-2 border-solid border-blueGray-200 rounded-t">
                  <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                    <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <RepoQuiz></RepoQuiz>
                <!--body-->
                <!-- <div class="relative align-center items-center justify-center flex flex-col p-6 flex-auto text-center">
                  <img class="md:w-20 align-center items-center flex " src="https://i.pinimg.com/originals/15/69/18/1569182838df53706f15f586e602dbd4.gif" alt="" srcset="">              
                  <p class="my-4 text-blueGray-500 text-2xl leading-relaxed">
                    Thank You for attempting the Test.
                  </p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
import RepoQuiz from "@/components/TeachersComponents/RepoQuiz";
export default {
  components:{
    RepoQuiz
  },
    data(){
        return{
            
        }
    },
    methods:{
       toggleModal:function(){
           this.$emit('toggle')
       }
    }
}
</script>

<style>

</style>