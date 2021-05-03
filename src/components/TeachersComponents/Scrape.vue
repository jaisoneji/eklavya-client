<template>
  <div class="flex w-full shadow-2xl rounded-xl pb-4 flex-col bg-background-secondary justify-center align-center items-center">
    <div class="h-132 md:h-148 w-full md:w-11/12   flex  justify-center flex-col" >
        
        <!-- text and submit -->
        <div class=" w-full mt-6 flex flex-row ">
            <input v-model="url" type="url" class="  px-4 py-2 border rounded-md w-5/6 h-10" placeholder="Enter Url : https://www.sanfoundary.com/web/quiz1">
            <button @click.prevent="getQuestion()" class="mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline md:text-xl text-lg text-text-btn font-bold rounded outline-none align-center" :class="theme">Submit</button>
        </div>

        <div  class="w-49/50 flex-1 px-2 my-4 border overflow-x-scroll bg-white md:h-8 h-16 rounded-md p-6">
            <vue-loading  v-if="isUploading===true" type="bars"  color="#d9544e" :size="{ width: '75px', height: '75px' }"></vue-loading>
            <div  v-else class="question" v-for="(item,index) in questions" :key="index">
                <div class="flex flex-row justify-center  items-center">
                    <div class="flex mr-2">{{index+1}}</div>
                    <div v-html="questions[index].question" class="mt-2 flex-1"></div>
                </div>
                <div class="ml-4 mt-4" v-for="(item,index) in questions[index].options" :key="index">
                    <p>{{item}}</p>
                </div>
                
            </div>

        </div>
        <!-- <div class="flex-1 m-4 border overflow-x-scroll bg-white h-8 rounded-md p-6">
           {{questions}}

        </div> -->


    </div>
    <!-- main div ends -->
    <button v-show="isQuestion" @click.prevent="SaveQuestions" class=" md:mt-4 shadow-lg items-center justify-center flex mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none focus:outline-none align-center" :class="theme">Export</button>

  </div>

    <!-- main div -->

</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
    components:{
        VueLoading
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
        isQuestion(){
            if(this.questions.length > 0){
                return true
            }else{
                return false
            }
        }
    },
    data(){
        return {
            url:'',
            questions:[],
            QuestionsTemp:[],
            isUploading:'false',
        }
    },
    methods:{
        getQuestion(){
            this.isUploading = true
            this.$store.dispatch('SCRAPE_QUESTIONS',{
                scrapeURL : this.url
            })
            .then(response=>{
                console.log(response)
                this.questions.push(... response.data.quizContent)
                this.isUploading = false
                console.log(this.questions)
            })
            .catch(error=>{
                console.log("Scrape error:"+error)
                this.isUploading = false
            })
        },
        async SaveQuestions(){
                try {
                    console.log("Scrape.vue"+this.questions)
                    console.log()
                    // this.QuestionsTemp.push(this.questions)
                    // await this.$store.commit('setMcq',{Rquestions: this.QuestionsTemp})
                    localStorage.setItem("isFromScrape",true)
                    await localStorage.setItem("localMCQs",JSON.stringify(this.questions))
                    this.$router.push('/MCQForm')
                } catch(e) {
                    console.log(e)
                }
        },
    }
}
</script>

<style>

</style>