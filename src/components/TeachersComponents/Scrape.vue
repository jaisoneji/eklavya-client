<template>
  
    <!-- main div -->
    <div class="h-128 md:h-128 md:w-full rounded-lg bg-background-secondary flex shadow-xl justify-center flex-col" >
        <!-- --------Chips box-------------- -->
        <div class="flex justify-center w-full">
         <input type="textarea" class=" mt-4  border rounded-md w-49/50 h-10" placeholder="Enter tags">
        </div>
        <!-- text and submit -->
        <div class=" w-full mt-6 flex flex-row ">
            <input v-model="url" type="url" class="  mx-2 border rounded-md w-5/6 h-10" placeholder="Enter Url : https://www.sanfoundary.com/web/quiz1">
            <button @click.prevent="getQuestion()" class="mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline md:text-xl text-lg text-text-btn font-bold rounded outline-none align-center" :class="theme">Submit</button>
        </div>

        <div  class="w-49/50 flex-1 mx-2 my-4 border overflow-x-scroll bg-white md:h-8 h-16 rounded-md p-6">
            <p v-if="isQuestion === false">Load Your data here!</p>
            <div v-else class="question" v-for="(item,index) in questions[0]" :key="index">
                <div class="flex flex-row justify-center  items-center">
                    <div class="flex mr-2">{{index+1}}</div>
                    <div v-html="questions[0][index].question" class="mt-2 flex-1"></div>
                </div>
                <div class="ml-4 mt-4" v-for="(item,index) in questions[0][index].options" :key="index">
                    <p>{{item}}</p>
                </div>
            </div>

        </div>
        <!-- <div class="flex-1 m-4 border overflow-x-scroll bg-white h-8 rounded-md p-6">
           {{questions}}

        </div> -->

    </div>
    <!-- main div ends -->

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
            
        }
    },
    methods:{
        async getQuestion(){
            await this.$store.dispatch('SCRAPE_QUESTIONS',{
                scrapeURL : this.url
            })
            .then(response=>{
                console.log(response)
                this.questions.push(response.data.quizContent)
                console.log(this.questions)
            })
            .catch(error=>{
                console.log("Scrape error:"+error)
            })
        }
    }
}
</script>

<style>

</style>