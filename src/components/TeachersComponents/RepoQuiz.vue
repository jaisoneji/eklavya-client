<template>
  <div class="flex h-full w-full">
      <!-- -----------form div-------------- -->
      <div class="w-128 bg-background-primary flex  justify-center items-center h-full">
         <div class="h-132  flex justify-center    w-11/12">
            <div class="h-80 mt-20 px-2  w-full ">
                <div class="h-32 px-2 py-4  overflow-hidden ">
                    <h2 class="text-text-text font-sans text-xl py-2 mb-2 w-full  ">Add Keywords for Question</h2>
                    <input-tag class="" placeholder="Add Keywords for Question" v-model="tags" :add-tag-on-blur="true" ></input-tag>
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
      <!-- ------------Suggestions and questions div------ -->
      <div class="border-l border-l-8 flex bg-background-primary justify-center items-center flex-col w-128  h-full">
          <div v-if="isShowSuggestionsPage === false" class="flex w-full h-full justify-center ">
              <h1 class="my-auto font-sans text-gray-800 text-4xl text-center">Your Suggestion appears here!</h1>
          </div>
          <div v-else class="h-132 justify-around  flex flex-col w-11/12">
            <!-- -------Questions Box----- -->
            <div class="border-t border-b  px-2 w-full  h-80">
                <div v-if="this.Questions.length > 0" class="h-full overflow-y-scroll w-full">
                    <h1 class="text-text-text text-xl font-sans font-semibold">Suggested Questions </h1>
                    <div class="question " v-for="(item,index) in Questions" :key="index">
                    <div class="flex flex-row justify-center  items-center">
                        <div class="flex mr-2">{{index+1}}</div>
                        <div v-html="Questions[index].question[0]" class="mt-2 flex-1"></div>
                    </div>
                    <div class="ml-4 mt-4" v-for="(item,index) in Questions[index].options" :key="index">
                        <p>{{item}}</p>
                    </div>
                    
                </div>
                <button v-show="this.Questions.length > 0" @click.prevent="redirectToForms" class=" md:my-4 shadow-lg items-center justify-center flex  border bg-white text-text-btn rounded-full w-full h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none focus:outline-none align-center" :class="theme">Export</button>
                </div>
                <div v-if="this.Questions.length <= 0" class=" flex flex-col justify-center align-center items-center w-full h-full">
                    <h3 class="text-2xl font-sans text-gray-700 text-center font-bold">Oops! No Questions Found</h3>
                    <button @click.prevent="createFromFeatures" class=" md:my-4 shadow-lg items-center justify-center flex  border bg-white text-text-btn w-1/2 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-semibold  outline-none focus:outline-none align-center" :class="theme">Create from Scratch</button>
                </div>

            </div>
            <!-- ---------Sugggestions box-------- -->
            <div v-if="showSuggestions === true" class="border-t border-b flex px-2  w-full  h-64">
                <div v-if="this.Suggestions.length > 0" class="overflow-y-scroll w-full">
                    <h1 class="text-text-text text-xl font-sans font-semibold">Suggested Links </h1>
                    <div class="flex my-2 bg-gray-100" v-for="(suggestion) in this.Suggestions" :key="suggestion">
                        <p class="p-2 font-sans">https://www.indiabix.com{{suggestion}}</p>
                        <button @click.prevent="redirectToScrape(suggestion)" class="focus:outline-none bg-green-500 border text-md font-sans text-white px-2">Open</button>
                    </div>
                </div>
                <div v-else class=" flex justify-center align-center items-center w-full h-full">
                    <h3 class="text-2xl font-sans text-gray-700 text-center font-bold">No links to Suggest</h3>
                </div>


            </div>

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
            isShowSuggestionsPage:false,
            noOfQuestion:1,
            tags:[],
            topics:"",
            showSuggestions:false,
            Questions:[],
            Suggestions:[]
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
        async submitForm(){
            this.tags.forEach((tag)=> this.topics= this.topics + tag+ " ")
            await this.$store.dispatch('FETCH_FROM_REPO',{
                topics:this.topics,
                questionLimit:this.noOfQuestion
            })
            .then((res)=>{
                console.log("RepoQuiz: "+res)
                this.Questions = res.questions
                this.Suggestions = res.suggestions
                this.isShowSuggestionsPage = true
                console.log(this.Questions)
                this.topic = ""
                this.tags=[]
                this.noOfQuestion = 0
            })
            .catch((err)=>{
                console.log("Error RepoQuiz: "+err)
            })
        },
        async redirectToForms(){
            try {
                    this.$emit('toggle')
                    // localStorage.setItem("isFromScrape",true)
                    await localStorage.setItem("localMCQs",JSON.stringify(this.Questions))
                    this.$router.push('/MCQForm')
                } catch(e) {
                    console.log(e)
                }
        },
        createFromFeatures(){
            this.$emit('toggle')
            this.$router.push('/Collapse')

        },
        redirectToScrape(suggestion){
            window.open(`https://www.indiabix.com${suggestion}`, '_blank');
            this.$emit('toggle')
            this.$router.push('/Collapse')
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