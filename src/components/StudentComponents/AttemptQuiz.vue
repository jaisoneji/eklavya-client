<template ref="AttQuiz">
  <div :class="theme"  class="bg-background-primary h-screen w-screen ">
    <div v-if="isVideoPage === true" class="border h-screen flex flex-col md:content-center overflow-y-scroll">

      <!-- ----------------video div---------------- -->
      <div id="videoContainer" class="flex content-center justify-center items-center md:content-center md:justify-center  md:mt-16 md:m-auto h-screen md:w-11/12">
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
      <button @click.prevent="toggleModal()">Show</button>
        <!-- 2. Google form start -->
        <div  class=" flex-row justify-center h-full ">            
            <div :class="theme" class="mt-2 overflow-y-scroll  bg-background-primary flex content-center w-full h-full items-center rounded-md space-y-4 flex-col ">
                <div :class="theme" class="animate-fadeInDown duration-700 bg-background-primary py-16 pl-2 rounded-lg shadow-lg w-10/12 h-5/6 " v-for="(question,i) in this.MCQs.content" :key="question.id" >
                    <div class="flex flex-row">
                        <!-- question -->
                    
                            <textarea :class="theme" class="text-xl text-white bg-background-secondary resize-none md:ml-2 md:mr-2 md:mt-1 rounded-md w-49/50" style="height:fit-content"
                            v-model="question.question" placeholder=""></textarea>
                        <!-- weightage -->
                            <!-- <input type="number" class="  justify-center md:ml-2 md:mr-2 mt-1 rounded-md w-10 "
                            v-model="question.weightage" placeholder=""> -->
                    </div>
                     <!-- options -->
                    <div class=" flex-col w-full m-2 " >
                       <div class="flex-col w-full py-2" v-for="(n,index) in question.options" :key="question.options[n]">
                            <label class="text-lg h-auto py-2 text-black" >
                              <input  :class="theme" class="ml-4 h-auto py-2 text-black bg-background-secondary focus:outline-none " v-model="studentsResponse[i].selectedAnswer" type="radio" :value="question.options[index]" >
                              {{question.options[index]}}</label>                              
                        </div>
                    </div>
                    <!-- options -->
                </div>
                <div class="flex flex-row align-center justify-center">    
                    <!-- button div -->
                    <div @click.prevent="submitQuiz()" class="flex justify-end m-8">
                        <button :class="theme" class="border flex w-32 h-14 items-center justify-center rounded-full bg-white transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-text-btn rounded outline-none align-cente">Submit</button>
                    </div>
                    <!-- button div-->
                </div>
            </div>      
        </div>
        <!-- -------Modal for showing results------ -->
        <div>
          
          <div v-if="showModal" class=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class=" relative w-auto my-6 mx-auto md:w-1/3">
              <!--content-->
              <div class="animate-fadeIn duration-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class=" flex items-start justify-between  px-2 py-2 border-solid border-blueGray-200 rounded-t">
                  <!-- <h3 class="text-3xl font-semibold">
                    Thank 
                  </h3> -->
                  <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="moveToHome()">
                    <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative align-center items-center justify-center flex flex-col p-6 flex-auto text-center">
                  <img class="md:w-20 align-center items-center flex " src="https://i.pinimg.com/originals/15/69/18/1569182838df53706f15f586e602dbd4.gif" alt="" srcset="">              
                  <p class="my-4 text-blueGray-500 text-2xl leading-relaxed">
                    Thank You for attempting the Test.
                  </p>
                </div>
                <!--footer-->
                <!-- <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button class="md:w-full text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                    Close
                  </button> -->
                  <!-- <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                    Save Changes
                  </button> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
          <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import VueCookies from 'vue-cookies'
import * as posenet from '@tensorflow-models/posenet';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
export default {
 
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
      moveToHome(){
        this.toggleModal()
        // this.$router.push({path: "TeachersDashboard/"})
      },
      async submitQuiz(){
        console.log(this.MCQs.content)
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
                // this.toggleModal()    
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
      toggleModal: function(){
        this.showModal = !this.showModal;
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
      isVideoOn:false,
      net:{},
      predictions:[],
      MCQs:{},
      penaltyCount:0,
      isVideoPage:true,
      studentsResponse:[],
      score:0,
      showModal: false
      
    }
  }
}
</script>

<style>

</style>