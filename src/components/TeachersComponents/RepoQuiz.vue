<template>
  <div class="flex h-full w-full">
      <!-- -----------form div-------------- -->
      <div class="w-128 bg-background-primary flex  justify-center items-center h-full">
         <div class="h-132  flex justify-center    w-11/12">
            <div class="h-80 mt-20 px-2  w-full ">
                <div class="h-32 px-2 py-4  overflow-hidden ">
                    <h2 class="text-text-text font-sans text-xl py-2 mb-2 w-full  ">Add Keywords for Question</h2>
                    <input-tag class="" placeholder="Add Keywords for Question" v-model="tags" :add-tag-on-blur="true" :limit="limit"></input-tag>
                </div>

                <div class="h-32 mt-4 px-2 py-4 overflow-hidden ">
                    <div class="custom-number-input h-10 w-full">
                    <label for="custom-input-number" class="text-text-text font-sans text-xl py-2 mb-2 w-full  ">Number of Questions
                    </label>
                    <div class="flex flex-row mt-4 h-10 w-1/2 rounded-lg relative bg-transparent mt-1">
                        <button @click.prevent="decre()" class=" focus:outline-none bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span class="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" v-model="noOfQuestion">
                        <button @click.prevent="incre()" class="focus:outline-none bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                </div>
                <div class="h-16 mt-4 px-2 py-4 overflow-hidden ">
                    <input @change="changeSuggestion" type="checkbox" true-value="yes" false-value="no" >
                    <label class="ml-2 text-text-text text-xl font-sans ">Would you like to see suggestions?</label>
                </div>
                <div class="  mt-6 px-2 flex">
                    <button class="focus:outline-none hover:shadow-btn w-1/2 mr-2 rounded-md bg-red-700  text-xl   py-2 text-white font-sans font-semibold">Cancel</button>
                    <button @click.prevent="submitForm" class="focus:outline-none hover:shadow-btn w-1/2 mx-2 rounded-md text-xl   py-2 text-white font-sans font-semibold bg-green-500">Submit</button>
                </div>
            </div>

         </div>
      </div>
      <div class="border-l border-l-8 flex flex-col w-128  h-full">
          <div class="flex w-full h-full justify-center ">
              <h1 class="mt-16 font-sans text-gray-800 text-4xl text-center">Your Suggestion appears here!</h1>
          </div>
      </div>
      
  </div>
</template>

<script>
import InputTag from 'vue-input-tag'

export default {
    components:{
        InputTag
    },
    data(){
        return{
            isShowSuggestions:true,
            noOfQuestion:1,
            tags:[],
            topics:"",
            showSuggestions:false
        }
    },
    methods:{
        incre(){
                this.noOfQuestion = this.noOfQuestion +1
        },
        decre(){
            if(this.noOfQuestion >0){

                this.noOfQuestion = this.noOfQuestion -1
            }
        },
        changeSuggestion(){
            this.showSuggestions = !this.showSuggestions
        },
        submitForm(){
            this.tags.forEach((tag)=> this.topics= this.topics + tag+ " ")
            console.log(this.topics)
        }

    }
}
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }

</style>