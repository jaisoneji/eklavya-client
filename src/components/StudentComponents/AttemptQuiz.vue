<template>
  <div :class="theme" class="bg-background-primary h-screen w-screen ">
    
    <div class="border h-screen flex flex-col md:content-center overflow-y-scroll">
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
  </div>
</template>

<script>
import Axios from 'axios'
import VueCookies from 'vue-cookies'

import * as posenet from '@tensorflow-models/posenet';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
export default {
  async mounted(){
    // const net = ""
    console.log(this.$route.params.quizName)
    const MCQArray = JSON.parse(localStorage.getItem("MCQs"))
    MCQArray.forEach(obj => {
      if(obj.title === this.$route.params.quizName){
        this.MCQs = obj
      }
    })
    console.log(this.MCQs)
    console.log(this.$refs.videoCam)
    this.name = this.$store.getters.getName
    // navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    
    await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      }).then(stream => {
        this.$refs.videoCam.srcObject = stream
        this.$refs.videoCam.play()
        this.loadModel(this.$refs.videoCam)
      })
      .catch(error => {
        console.log("AttemptQuiz video error" +error)
      })


      // To trigger if full screen exits
      document.addEventListener("webkitfullscreenchange" ,function() {
        if(document.webkitIsFullScreen === false){
          console.log("Screen Exited Penalty")
        }
        
      },true);
    },
    beforeDestroy(){
        this.$refs.videoCam.pause();
        this.$refs.videoCam.srcObject = ''
    },
    methods:{
      enterToFullScreen(){
        document.body.webkitRequestFullScreen()
      },
      proceed(){
        this.enterToFullScreen()
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
            this.posepredict = "left hand side"
            this.sendPrediction(this.posepredict)
          }else if(rightEarScore < 80 && rightEyeScore < 80){
            console.log("right side")
            this.posepredict = "right side"
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

    }
  }
}
</script>

<style>

</style>