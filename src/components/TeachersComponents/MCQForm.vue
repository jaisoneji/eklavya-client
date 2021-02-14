<template>
    <!-- 1. main div -->
    <div class =" justify-center flex-col w-100 h-100">
        <!-- 2. Google form start -->
        <div class="border flex-row justify-center ">
            <!-- 3. title -->
            <div class="border flex justify-center text-xl">
                {{title}}
            </div>
            <!-- 3. title -->
            <!-- 4. question section -->
            
            <div class="flex content-center items-center rounded-md space-y-2 flex-col ">
                
                <div class="py-4 pl-2 rounded-lg shadow-lg  w-1/2" v-for="(question) in Questions" :key="question.id" >
                    
                    
                    <div class="flex flex-row">
                        <!-- question -->
                            <input type="textarea" class="  ml-2 mr-2 mt-1 rounded-md w-49/50 "
                            v-model="question.question" placeholder="">
                        <!-- weightage -->
                            <input type="number" class=" border justify-center ml-2 mr-2 mt-1 rounded-md w-10 "
                            v-model="question.weightage" placeholder="">
                    </div>
                     <!-- options -->
                    <div class=" flex-col pl-4 m-2" >
                        <div class="flex-col" >
                            
                            <input type="radio" id="one" value="One" v-model="question.options.op1">
                            <label for="one">{{question.options[0]}}</label><br>
                            
                            <input type="radio" id="one" value="Two" v-model="question.options.op2">
                            <label for="two">{{question.options[1]}}</label><br>

                             <input type="radio" id="one" value="Three" v-model="question.options.op3">
                            <label for="three">{{question.options[2]}}</label><br>

                             <input type="radio" id="one" value="Four" v-model="question.options.op4">
                            <label for="four">{{question.options[3]}}</label><br>
                            </div>
                       
                    </div>
                    <!-- options -->
                    <!-- question-->
                </div>
                <div class="flex flex-row justify-center">
                    <!-- button div -->
                    <div @click.prevent="newdiv()" class="flex justify-end m-8">
                        <button class="flex  items-center justify-center bg-background-secondary h-12 w-12 text-white font-bold rounded-full outline-none align-center"> + </button>
                    </div>
                    <!-- button div-->
                    <!-- button div -->
                    <div @click.prevent="mcqform()" class="flex justify-end m-8">
                        <button class="flex w-32 h-14 items-center justify-center bg-background-secondary text-white rounded outline-none align-center">Schedule Form</button>
                    </div>
                    <!-- button div-->
                </div>
            </div>      
                <!-- ................................... -->
            <!-- 4. question section -->
        
        
        </div>
        <!-- 2. Google form end-->
    </div>
    <!-- 1. end main div -->
</template>
<script>
export default {
    name: 'McqForm',
    created() {
        const content = this.$store.getters.getContent
        this.Questions = [...content]
        console.log(this.Questions)
    },
    data(){
        return{
            title:'mcq',
            Questions: []
            // Scheduled:{
            // Name:
            // Time:
            // Date:
            // Class:
            // Note:
            }
        },
        methods:{
            async mcqform(){
                try {
                    await this.$store.dispatch('MCQFORM',{title: this.title,Rquestions: this.Questions})
                    this.$router.push('/Schedule')
                } catch(e) {
                    console.log(e)
                }
            },
            newdiv(){
                
            }
        }
    }

</script>
    
