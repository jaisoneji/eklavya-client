<template>
    <!-- 1. main div -->
    <div class ="border justify-center flex-col h-full">
        <!-- 2. Google form start -->
        <div class="border flex-row justify-center ">
            <!-- 3. title -->
            <div class="border flex justify-center mt-10 text-4xl">
                MCQ Form
            </div>
            <!-- 3. title -->
            <!-- 4. question section -->
            
            <div class="border m-20 rounded-md space-y-4 flex-col">
                
                <div class=" justify-start" v-for="(question) in questions" :key="question.id" >
                    <!-- question -->
                    
                    <input type="textarea" class=" border ml-2 mr-2 mt-1 rounded-md w-49/50 "
                    v-model="question.ques" placeholder="">
                     <!-- options -->
                    <div class=" flex-col mr-2 ml-2" v-for="(option) in options" :key="option.id"  >
                        <div class="flex-col" v-if="option.id === question.id">
                            
                            <input type="radio" id="one" value="One" v-model="option.op1">
                            <label for="one">{{option.op1}}</label><br>
                            
                            <input type="radio" id="one" value="Two" v-model="option.op2">
                            <label for="two">{{option.op2}}</label><br>

                             <input type="radio" id="one" value="Three" v-model="option.op3">
                            <label for="three">{{option.op3}}</label><br>

                             <input type="radio" id="one" value="Four" v-model="option.op4">
                            <label for="four">{{option.op4}}</label><br>
                            </div>
                       
                    </div>
                    <!-- options -->
                    <!-- question-->
                </div>
            </div>      
                <!-- ................................... -->
            <!-- 4. question section -->
            <!-- button div -->
            <div class="flex justify-end mb-10 mr-20">
                <button class="flex font-bold text-xl w-32 h-14 items-center justify-center bg-background-secondary text-white rounded outline-none align-center">Schedule Form</button>
            </div>
        <!-- button div-->
        
        
        </div>
        <!-- 2. Google form end-->
    </div>
    <!-- 1. end main div -->
</template>
<script>
export default {
    name: 'McqForm',
    data(){
        return{
            newQuestion :'',
            questions:[
                {
                    'id':1,
                    'ques':'This is a question1',
                    
                },
                {
                    'id':2,
                    'ques':'This is a question2',
                   
                },
                {
                    'id':3,
                    'ques':'This is a question3',
                     
                },
                {
                    'id':4,
                    'ques':'This is a question4',
                     
                }
            ],
            options:[
                        {
                            'id':1,
                            'op1':'fgffgfgf',
                            'op2':'aaaaaa',
                            'op3':'sssssssssss',
                            'op4':'ghhhhhhh',
                        },
                        {
                            'id':2,
                            'op1':'2',
                            'op2':'2',
                            'op3':'soni',
                            'op4':'2',
                        },
                        {
                            'id':3,
                            'op1':'3',
                            'op2':'3aaaaaaaaaaaaaaa',
                            'op3':'3s',
                            'op4':'3',
                        },
                        {
                            'id':4,
                            'op1':'3',
                            'op2':'4',
                            'op3':'3s',
                            'op4':'3',
                        }
                    ],
            answers:[
                {

                }
            ]
            // Scheduled:{
            // Name:
            // Time:
            // Date:
            // Class:
            // Note:
            }
        },
        methods:{
            //    next pe hi savee
        }
    }

</script>
    
