<template>
<!-- main -->
    <div class=" w-full h-full overflow-y-scroll">
        <!-- grid start -->
        {{result}}
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
                                        <h3 class="text-white">{{student.Student_name}} , {{student.Class}}</h3>
                                        <h3 class="text-white">{{student.Status}}</h3>
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
                    this.result = data.proctoredWarning
                    console.log(data)
                }
            }
        }
    },
    data(){
        return{
            result:"",
            student_data:[
                {
                    id:'1',
                    Student_name:'Sonia',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },
                {
                    id:'2',
                    Student_name:'Hrithik',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                {
                    id:'3',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                 {
                    id:'4',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                 {
                    id:'5',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                 {
                    id:'6',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                 {
                    id:'7',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                 {
                    id:'8',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                {
                    id:'9',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                {
                    id:'10',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                {
                    id:'11',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Submitted',
                },
                {
                    id:'12',
                    Student_name:'Smith',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },
                {
                    id:'13',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'14',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:' Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:' Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:' Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },{
                    id:'15',
                    Student_name:'kiftt',
                    Class:'D17A',
                    Status:'up',
                    Submitted:'Not Submitted',
                },
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
    }

}
</script>

<style>
.sonia{
    border-color:green,
}

</style>