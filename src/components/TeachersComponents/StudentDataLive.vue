<template>
<!-- main -->
    <div class=" w-full h-full overflow-y-scroll">
        <!-- grid start -->
        
        <div class=" grid grid-flow-row md:grid-cols-4 md:grid-rows-3 md:grid-flow-row gap-4 grid-row-1 grid-col-1">
            <!-- for loop div start -->
            <div class="  flex justify-center bg-background-primary" :class="theme" v-for="(student) in student_data" :key="student.id" >    
                <!-- one card grid -->
                <div class=" p-2 md:h-64 md:w-132 h-1/3 w-4/5 rounded-xl shadow-lg m-1 bg-background-secondary" :class="getColor(student)">
                                <div class="flex justify-center">
                                    <div class="bg-white rounded-full h-24 w-24 items-center justify-center flex">
                                        <img v-if="isLocal === false" class="h-full w-full rounded-full" :src="imageurl" alt="">
                                        <img v-else class="h-full w-full rounded-full" src="@/assets/avatar.png" alt="">
                                    </div>
                                </div>
                                <!-- details -->
                                <div class="flex flex-col justify-center items-center text-center  m-5" >
                                        <h3 class="text-white">{{student.user.name}} , {{student.user.email}}</h3>
                                        <h3 class="text-white">{{student.warning}}</h3>
                                        <!-- <h3 class="text-white">{{student.Submitted}}</h3> -->
                                </div>
                                <!-- details -->
                </div>
                <!-- one card grid -->
            </div>
            <!-- for loop div end -->
        </div>
        <!-- grid end -->
    </div>
<!-- main -->
</template>

<script>
import gql from 'graphql-tag'
const SUBSCRIPTION_STUDENT_UPDATE = gql`subscription{
    proctoredWarning{
        proctoredWarnings{
            user{
                _id
                name
                email
            }
            warning
        }
    }
}`
export default {
    name:'StudentDataLive',
    apollo:{
        $subscribe:{
            student_update:{
                query:SUBSCRIPTION_STUDENT_UPDATE,
                result({data}){
                    console.log("Inside subscription")
                    this.result = data.proctoredWarning.proctoredWarnings
                    console.log(data)
                    for (let k = 0; k < data.proctoredWarning.proctoredWarnings.length; k++) {
                        this.addOrUpdate(data.proctoredWarning.proctoredWarnings[k])
                        
                    }

                }
            }
        }
    },
    data(){
        return{
            result:"",
            student_data:[
                
            ]
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
        }
    },
    methods:{
        getColor(student){
            return student.Submitted === 'Submitted' ? 'border-8 border-green-500 border-opacity-100 ' : 'border-8 border-red-500 border-opacity-100'
        },
        addOrUpdate(result){
            console.log("Inside addOrUpdate")
            console.log(result)
            for (var i = 0; i < this.student_data.length; i++) {
                if (this.student_data[i].user.email === result.user.email ) {
                        this.student_data[i].name = result.user.name;
                        this.student_data[i].warning = result.warning;
                        return;                             // exit loop and function
                    }
            }
            this.student_data.push(result);
            console.log(this.student_data)
        }  
    }

}
</script>

<style>
.sonia{
    border-color:green,
}

</style>