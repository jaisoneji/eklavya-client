<template ref="AttQuiz">
  <div :class="theme"  class="bg-background-primary h-screen w-screen ">
    
    <div v-if="isVideoPage === true" class="border h-screen flex flex-col md:content-center overflow-y-scroll">
      <!-- ----------------video div---------------- -->
      <div id="videoContainer" class="flex content-center justify-center items-center md:content-center md:justify-center md:m-auto h-screen md:w-11/12">
        <video 
          :src="srcURL"
          class="w-10/12 h-64 md:h-128   justify-center  md:justify-center border border-black shadow-lg rounded-lg flex " 
          ref="videoCam" id="webcam" autoplay ></video>  
          <!-- <canvas id="canvas" width="640" height="480" ref="canvass"></canvas>   -->
      </div>
       <!-- --------------Instructions div----------- -->
       
       <div class="flex flex-col justify-center items-center w-full ">
        <h2 :class="theme" class="font-mono text-text-text txt-bold text-4xl">You are looking,{{posepredict}}</h2>
        <div class="my-4 flex border border-red-700 px-4 py-2 shadow-lg rounded-lg w-1/2 ">
            <ul :class="theme" class="list-disc px-2">
              <li class="text-text-text">Please ensure that your face is visible on camera</li>
              <li class="text-text-text">Looking anywhere else then in screen, will welcome penaly, which may lead to disqualification</li>
              <li class="text-text-text">User is not allowed to switch its camera off, in any case</li>
            </ul>
        </div>
        <button @click.prevent="proceed" class=" md:my-4 shadow-lg items-center justify-center flex mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none focus:outline-none align-center" :class="theme">Proceed </button>
       </div>

    </div>

    <!-- --------MCQ Quiz----- -->
    <div v-else class =" justify-center flex-col w-full h-screen">
        <button @click.prevent="openResults()">Open!!</button>
        <!-- 2. Google form start -->
        <div  class="flex-row justify-center h-screen  ">            
            <div :class="theme" class="overflow-y-scroll h-screen bg-background-primary flex content-center w-full items-center rounded-md space-y-2 flex-col ">
                <Logout/>
                <div :class="theme" class="mt-6 bg-background-secondary py-4 pl-2 rounded-lg shadow-lg w-9/12 md:w-1/2" v-for="(question) in this.MCQs.content" :key="question.id" >
                    <div class="flex flex-row">
                        <!-- question -->
                            <textarea :class="theme" class="text-white bg-background-secondary resize-none md:ml-2 md:mr-2 md:mt-1 rounded-md w-49/50" style="height:fit-content"
                            v-model="question.question" placeholder=""></textarea>
                        <!-- weightage -->
                            <!-- <input type="number" class="  justify-center md:ml-2 md:mr-2 mt-1 rounded-md w-10 "
                            v-model="question.weightage" placeholder=""> -->
                    </div>
                     <!-- options -->
                    <div class=" flex-col w-full m-2" >
                       <div class="flex-col w-full" v-for="(n,index) in question.options.length" :key="question.options[n]">
                            <label class="text-white" >
                              <input  :class="theme" class="text-white bg-background-secondary focus:outline-none " v-model="question.selectedAnswer" type="radio" :value="question.options[index]" >
                              {{question.options[index]}}</label><br>                              
                        </div>
                    </div>
                    <!-- options -->
                    <!-- question-->
                </div>
                <div class="flex flex-row align-center justify-center">    
                    <!-- button div -->
                    <div @click.prevent="submitQuiz()" class="flex justify-end m-8">
                        <button :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-text-btn rounded outline-none align-cente">Submit</button>
                    </div>
                    <!-- button div-->
                </div>
            </div>      
                <!-- ................................... -->
            <!-- 4. question section -->
        
        
        </div>
        <!-- -------Modal for showing results------ -->
        <modal ref="modalName">
          <template v-slot:header>
            <h1>Score!</h1>
          </template>

          <template v-slot:body>
            <h1>You have Scored: <span>{{score}}</span></h1>
          </template>

          <template v-slot:footer>
            <div>
              <button @click="$refs.modalName.closeModal()">Cancel</button>
              <button @click="$refs.modalName.closeModal()">Save</button>
            </div>
          </template>
      </modal>
    </div>
  </div>
</template>

<script>
import modal from '@/components/Modal.vue'
import Axios from 'axios'
import VueCookies from 'vue-cookies'
import * as posenet from '@tensorflow-models/posenet';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
export default {
  components:{
    modal
  },
  watch: {
    penaltyCount: function (val) {
      if(val >= 40){
        alert("Penalty Limit exceeded..You are no longer allowed to Give Quiz")
          window.location.replace("http://localhost:8080/TeachersDashboard/");
      }
    }
  },
  async mounted(){
    // const net = ""
    console.log(this.penaltyCount)
   
    console.log(this.$route.params.quizName)
    const MCQArray = JSON.parse(localStorage.getItem("MCQs"))
    MCQArray.forEach(obj => {
      if(obj.title === this.$route.params.quizName){
        this.MCQs = obj

      }
    })
    this.MCQs.content.forEach(obj=>{
      obj.selectedAnswer = ""
    })
    console.log(this.MCQs.content)
    this.MCQs.content.forEach(obj=>{
      this.studentsResponse.push({
        "contentId ":obj._id,
        "availableAnswer": obj.answer[0],
        "selectedAnswer":''
      })
    })
    console.log(this.studentsResponse)
    // console.log(this.MCQs)
    console.log(this.$refs.videoCam)
    this.name = this.$store.getters.getName
    // navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    
    await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      }).then(stream => {
        // window.localStream = stream;
        this.$refs.videoCam.srcObject = stream
        this.$refs.videoCam.play()
        this.loadModel(this.$refs.videoCam)
      })
      .catch(error => {
        console.log("AttemptQuiz video error" +error)
      })

      // To trigger if full screen exits
      // this.fulldiv = document.getElementById('AttQuiz')
      // const fulldiv = document.getElementById('AttQuiz')
      // console.log(fulldiv)
      // document.addEventListener("webkitfullscreenchange" ,function() {
      //   if(!document.webkitIsFullScreen){ 
      //     // document.body.webkitRequestFullScreen()
      //     console.log(this)
          
      //     setTimeout(()=>{
      //       this.addPenalty(4)
      //       console.log(this.penaltyCount)
      //       console.log("Penalty")
      //     },3000)
      //   }


        
      // },true);


      // this is for switching tabs
    //   document.addEventListener("visibilitychange", function() {
    //       if (document.hidden){
              
    //           console.log("Browser tab is hidden")
    //           alert("You have switched tabs!. hence we are ending your quiz")
    //           window.location.replace("http://localhost:8080/TeachersDashboard/");

    //       } else {
    //           console.log("Browser tab is visible")
    //       }
    //   },{
    //   once: true,
    //   passive: true,
    //   capture: true
    // });
    },
    
    methods:{
      async submitQuiz(){
        console.log(this.MCQs.content)
        for(var i = 0;i<this.MCQs.content.length;i++){
          this.studentsResponse[i].selectedAnswer = this.MCQs.content[i].selectedAnswer
        }
        console.log(this.studentsResponse)
                let tempArray=[
                  {
                    formId:this.MCQs._id,
                    studentsResponse:[
                      ...this.studentsResponse
                    ]
                  }
                ]
                console.log(tempArray)
        try{
                let data = await this.$store.dispatch('SUBMIT_QUIZ',tempArray)
                console.log(data)
                alert("Quiz Submitted")
                // this.$router.push({name: "TeachersDashboard"})
            }catch(error){
                console.log("Error Sbmiting quiz"+error)
            }
      },
      addPenalty:(val)=>{
        this.penaltyCount += val
      },
      proceed(){
        this.isVideoPage = false
      },
      async loadModel(stream){
        console.log("Inside prediction")
        await posenet.load()
          .then(net => {
            this.net= net
            console.log(this.net)
            this.predictPose(net,stream)
          })
      },
      async predictPose(net,stream){
        // while(this.isVideoOn){

          const pose = await net.estimateSinglePose(stream, {
            flipHorizontal: true
          });
          this.estimatePose(pose)
        // }
   
      
      },
      estimatePose(pose){
          console.log(pose)
          const leftEyeScore = ((pose.keypoints[1].score)*100)
          const rightEyeScore = ((pose.keypoints[2].score)*100)
          const leftEarScore = ((pose.keypoints[3].score)*100)
          const rightEarScore = ((pose.keypoints[4].score)*100)
          if(leftEarScore < 80 && leftEyeScore < 80){
            console.log("left hand side")
            this.posepredict = "left side"
            this.penaltyCount += 2
            console.log(this.penaltyCount)
            this.sendPrediction(this.posepredict)
          }else if(rightEarScore < 80 && rightEyeScore < 80){
            console.log("right side")
            this.posepredict = "right side"
            this.penaltyCount += 2
            console.log(this.penaltyCount)
            this.sendPrediction(this.posepredict)
          }else{
            console.log("Perfect")
            this.posepredict = "Perfeect!!"
            this.sendPrediction(this.posepredict)
          }
          console.log(pose.keypoints[0].part);

          // --------uncomment the below line to predict in real time-----------
          // this.predictPose(this.net,this.$refs.videoCam)
      },

      async sendPrediction(posePredicted){
        try{
          console.log(posePredicted)
          let method = localStorage.getItem("method")
          let token = VueCookies.get("token")
          let data = JSON.stringify({
            formID:this.MCQs._id,
            warning:posePredicted
          })
          const res = await Axios.post('http://localhost:5000/api/v1/proctored/students/proctoredWarning',data,
              {
                headers:{
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  "Authorization": `Bearer ${method} ${token}`
                }
              }
            )
            console.log(res)

        }
        catch(error){
          alert("Attempt Quiz Error"+error)
        }
      },
      openResults(){
        this.$refs.modalName.openModal
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
              isPenalty(){
                if(this.penaltyCount >= 10){
                  return true
                }
                else{
                  return false
                }
              }
          },
          
    
  data(){
    return{
      name:'',
      srcURL:'',
      posepredict:'',
      isVideoOn:true,
      net:{},
      predictions:[],
      MCQs:{},
      penaltyCount:0,
      isVideoPage:true,
      studentsResponse:[],
      score:0
      
    }
  }
}
</script>

<style>

</style>