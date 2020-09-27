<template>
  
    <!-- main div -->
    <div class="h-80 w-full bg-background-secondary flex  justify-center flex-col" :class="theme">
        
        <!-- text and submit -->
        <div class=" w-full mt-10 flex flex-row ">
            <input v-model="url" type="url" class="  mx-2 border rounded-md w-5/6 h-10" placeholder="Enter Url : https://www.sanfoundary.com/web/quiz1">
            <button @click.prevent="getQuestion()" class="mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl text-text-btn font-bold rounded outline-none align-center" :class="theme">Submit</button>
        </div>

        <div class="flex-1 m-4 border">
            hello
        </div>

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
    },
    data(){
        return {
            url:''
        }
    },
    methods:{
        async getQuestion(){
            await this.$store.dispatch('SCRAPE_QUESTIONS',{
                scrapeURL : this.url
            })
            .then(response=>{
                console.log(response)
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