<template>
    <!-- 1. main div -->
    <div class ="overflow-y-scroll justify-center flex-col w-full h-full">
        <!-- 2. Google form start -->
        <div v-if="!isEmpty" class="flex-row justify-center h-full  ">            
            <div :class="theme" class="h-full bg-background-primary flex content-center w-full items-center rounded-md space-y-2 flex-col ">
                <Logout/>
                <div :class="theme" class="mt-6 bg-background-secondary py-4 pl-2 rounded-lg shadow-lg w-9/12 md:w-1/2" v-for="(question) in Questions" :key="question.id" >
                    <div class="flex flex-row">
                        <!-- question -->
                            <textarea @change="saveTemproryChanges" :class="theme" class="text-white bg-background-secondary resize-none md:ml-2 md:mr-2 md:mt-1 rounded-md w-49/50" style="height:fit-content"
                            v-model="question.question" placeholder=""></textarea>
                        <!-- weightage -->
                            <!-- <input type="number" class="  justify-center md:ml-2 md:mr-2 mt-1 rounded-md w-10 "
                            v-model="question.weightage" placeholder=""> -->
                    </div>
                     <!-- options -->
                    <div class=" flex-col pl-4 m-2" >
                       <div class="flex-col w-full" v-for="(n,index) in question.options.length" :key="question.options[n]">
                            <input @change="saveTemproryChanges" :class="theme" class="text-white bg-background-secondary w-1/2 focus:outline-none " type="text" name="index" id="one" v-model="question.options[index]" >
                            <!-- <label class="p-2" for="one">{{option}}</label><br> -->
                        </div>
                    </div>
                    <!-- options -->
                    <!-- question-->
                </div>
                <div class="flex flex-row align-center justify-center">    
                    <!-- button div -->
                    <div @click.prevent="mcqform()" class="flex justify-end m-8">
                        <button :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-text-btn rounded outline-none align-cente">Schedule Form</button>
                    </div>
                    <!-- button div-->
                </div>
            </div>      
                <!-- ................................... -->
            <!-- 4. question section -->
        
        
        </div>
        <!-- 2. Google form end-->
        <div v-else :class="theme" class="items-center align-center h-screen bg-background-primary flex flex-col w-full justify-center">
            <img class="flex justify-center md:h-64 w-64" src="@/assets/nodatafound.png" alt="">
            <h2 :class="theme" class="flex font-mono text-text-text txt-bold text-4xl">No data Found!</h2>
        </div>
    </div>
    <!-- 1. end main div -->
</template>
<script>
import Logout from '@/components/Logout'

export default {
    components:{
        Logout
    },
    name: 'McqForm',
    mounted() {
        const content = this.$store.getters.getContent

        this.Questions = [...content]
        console.log(this.Questions)
    },
    data(){
            return{
                isEditing:'false',
                Questions: []
                
            }
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
            isEmpty(){
                if(this.Questions.length > 0){
                    return false
                }else{
                    return true
                }
            }
        },
        methods:{
            async mcqform(){
                try {
                    await this.$store.dispatch('MCQFORM',{Rquestions: this.Questions})
                    this.$router.push('/Schedule')
                } catch(e) {
                    console.log(e)
                }
            },
            newdiv(){
                
            },
            saveTemproryChanges(){
                try {
                    console.log("changing")
                    this.$store.commit('saveTemporaryChanges',{Rquestions: this.Questions})
                } catch(e) {
                    console.log(e)
                }
            }
        }
    }

</script>
    
