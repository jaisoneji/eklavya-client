<template>
    <!-- 1. main div -->
    <div  class ="overflow-x-hidden justify-center flex-col w-full h-screen">
        <!-- 2. Google form start -->
        <div  class="flex-row justify-center h-screen ">            
            <div :class="theme" class="pt-10 overflow-y-scroll  bg-background-primary flex content-center w-full h-full items-center rounded-md space-y-4 flex-col ">

                <div :class="theme" class="animate-fadeInDown duration-700 border bg-background-primary  rounded-lg shadow-lg w-10/12 h-5/6 " v-for="(question) in Questions" :key="question.id" >
                    <div class="flex flex-row">
                        <!-- question -->
                            <textarea @change="saveTemproryChanges" :class="theme" class="pt-2 bg-background-primary text-xl text-text-text resize-none md:ml-6 md:mr-2 md:mt-6 rounded-md w-49/50" style="height:fit-content"
                            v-model="question.question" placeholder=""></textarea>
                        <!-- weightage -->
                            <label class="text-text-text justify-center align-center items-center content-center flex flex-1">
                                Marks:
                                <input min="1" @change="saveTemproryChanges" type="number" class="w-16 border mx-2 border-dashed border-8 "
                                v-model="question.weightage" placeholder="">
                            </label>
                    </div>
                    <!-- question end-->
                     <!-- options -->
                    <div class=" flex-col w-full mt-6 px-4" >
                       <div :class="theme" class="flex-col w-full border overflow-x-hidden rounded-lg my-4 h-auto bg-background-options  py-2" v-for="(n,index) in question.options" :key="question.options[n]"> 
                            <input @change="saveTemproryChanges"  class=" w-full text-lg h-auto  py-2 text-black bg-background-options ml-4 h-auto py-2 text-black focus:outline-none" type="text" name="index" id="one" v-model="question.options[index]" >
                            <!-- <label class="p-2" for="one">{{option}}</label><br> -->
                        </div>
                    </div>
                    <!-- options End-->
                    <!-- -select answer dropdown----- -->
                    <div class=" flex-col w-full mt-10 px-4" >
                        <h1 class="w-full px-4 text-xl font-semibold">Select Your Answer</h1>
                       <div :class="theme" class="flex-col w-full border overflow-x-hidden rounded-lg my-4 h-auto bg-green-300  py-2"> 
                            <select @change="saveTemproryChanges" class=" w-full text-lg h-auto  py-2 text-black  bg-green-300 ml-4 h-auto py-2 focus:outline-none" v-model="question.answer">
                                <option class="text-white" @change="saveTemproryChanges" disabled value="">select Answer </option>
                                <option @change="saveTemproryChanges" v-for="option in question.options" :key="option" :value="option">{{option}}</option>
                            </select>
                        </div>
                    </div>
                    <!-- -select answer dropdown ends----- -->
                </div>
                    <!-- ---add new question--- -->
                    <div @click.prevent="addQuestion"  :class="theme" class="bg-background-primary cursor-pointer flex items-center content-center justify-center  align-center border-dashed border-4 border-light-blue-500 w-10/12">
                        <div :class="theme" class="bg-background-primary h-full  flex  rounded-md bg-gray-100 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                :class="theme" class="bg-background-primary flex justify-end align-end items-center h-full"
                                viewBox="0 0 172 172"
                                style=" fill:#000000;"><g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path><g fill="#1c75bc" fill-rule="evenodd"><path d="M78.83333,14.33333v64.5h-64.5v14.33333h64.5v64.5h14.33333v-64.5h64.5v-14.33333h-64.5v-64.5z"></path></g></g>
                            </svg>
                            <button :class="theme" class="bg-background-primary flex justify-center items-center w-full h-full  px-2 py-2 text-text-text font-sans font-semibold focus:outline-none ">
                                Add</button>
                        </div>
                    </div>
                    <!-- --add  new question end--- -->
                <div class="h-auto  flex flex-col align-center justify-center">
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
        <!-- <div v-else :class="theme" class="items-center align-center h-screen bg-background-primary flex flex-col w-full justify-center">
            <img class="flex justify-center md:h-64 w-64" src="@/assets/nodatafound.png" alt="">
            <h2 :class="theme" class="flex font-mono text-text-text txt-bold text-4xl">No data Found!</h2>
        </div> -->
    </div>
    <!-- 1. end main div -->
</template>
<script>
// import Logout from '@/components/Logout'

export default {
    components:{
        
    },
    name: 'McqForm',
     mounted() {
        // const content = await this.$store.getters.getContent
        if(localStorage.getItem("isFromScrape")===true){
            this.Questions = [...[...JSON.parse(localStorage.getItem("localMCQs"))]]
        }
        else{
            this.Questions = [... JSON.parse(localStorage.getItem("localMCQs"))]
            console.log("mounted:")
            console.log(this.Questions)

        }
    },
    data(){
            return{
                isEditing:'false',
                Questions: [],
                
                
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
            // isEmpty(){
            //     if(this.Questions.length > 0){
            //         return false
            //     }else{
            //         return true
            //     }
            // }
        },
        methods:{
            async mcqform(){
                try {
                    await this.$store.commit('setMcq',{Rquestions: this.Questions})
                    this.$router.push('/Schedule')
                } catch(e) {
                    console.log(e)
                }
            },
            saveTemproryChanges(){
                try {
                    console.log("changing")
                    this.$store.commit('saveTemporaryChanges',{Rquestions: this.Questions})
                } catch(e) {
                    console.log(e)
                }
            },
            addQuestion(){
                this.Questions.push({
                    "answer":[""],
                    "question":["Add question here"],
                    "options":["Add option here","Add option here","Add option here","Add option here"],
                    "weightage":2,
                    "type":"MCR"
                })
            }
            
        }
    }

</script>
    
