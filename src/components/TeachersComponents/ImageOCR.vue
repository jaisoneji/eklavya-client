<template>
  <div>
      <div>
        <!-- ---Image divv-------------- -->
        <div class="flex flex-col space-y-4 align-center items-center justify-center">
            <h3 class="text-text-btn text-xl font-bold md:mt-2" :class="theme">Upload Image Below</h3>
            <div  class="md:w-4/5 w-11/12 h-80 md:h-80 shadow-lg flex flex-1 bg-gray-300">
                <img v-if="isImageAdded===true" :src="image" class="object-contain w-full">
                <div v-if="isUploading===true" class="absolute md:w-4/5 w-11/12 h-80 md:h-80 shadow-lg">
                    <div  class="md:mt-32 md:w-full md:h-full">
                        <vue-loading  type="bars"  color="#d9544e" :size="{ width: '75px', height: '75px' }"></vue-loading>
                    </div>
                </div>
                <div>
                    <div v-if="isUploaded">
                        Generated Questions
                    </div>
                </div>
            </div>
            
            <div class="flex w-full align-center items-center justify-center">
                <label v-if="isImageAdded===false" class="mx-2 row-2 border text-center placeholder-blue-700 cursor-pointer bg-white text-text-btn rounded-full w-1/3 md:w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none align-center" :class="theme">
                    <input v-on:change="openFile" ref="file" class="hidden" accept="image/*" type="file"/>
                    Select File
                </label>
                <div v-else class="md:w-full text-center align-center">
                    <button v-show="!isUploaded" @click.prevent="uploadImage" class="mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none align-center" :class="theme">Upload</button>
                    <button v-show="!isUploaded"  @click="removeImage" class="mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none align-center" :class="theme">Remove</button>
                </div>
                
            </div>
        </div>
        <!-- --------Image div ends here---- -->
        <!-- ------------Generated Quetions---- -->
        
        <!-- --------Generated questions div ends here------ -->
        <div v-show="isError" class="text-bold text-lg md:mt-2 md:w-2/3 m-auto text-center py-2 bg-red-200 flex flex-col">
                    Oops! An Error Occured, Please try Again
        </div>
      </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
export default {
    components:{
        VueLoading
    },
    data(){
        return{
          
            isUploading:false,
            image:'',
            isUploaded:false,
            isError:false
            
        }
    },
    computed:{
        isImageAdded(){
            if(this.image){
                return true
            }else{
                return false
            }
        },
        theme(){
        if(this.$store.getters.getMode === 'theme-dark'){
            return 'theme-dark'
        }
        else{
            return 'theme-light'
        }
      }, 
    },
    methods:{
        openFile(e){
            this.isUploaded=false
            this.isUploading=false
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            // var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            
            reader.readAsDataURL(file);
        },
        removeImage(){
            this.image=''
            this.isUploading=false
            
        },
        async uploadImage(){
            this.isUploading=true
            console.log(this.image)
            await this.$store.dispatch("IMAGEOCR",this.image)
            .then(response=>{
                this.isUploading=false
                this.image=''
                this.isUploaded=true
                console.log(response)
                console.log("ImageOCR.vue response"+response)
            })
            .catch(error=>{
                console.log("ImageOCR.vue error: "+error)
                this.isUploading=null
                this.image=''
                this.isUploaded=null
                this.isError=true
                setTimeout(()=>{
                this.isError=false
                },5000)
            })
            // setTimeout(()=>{
            //     this.isUploading=false
            //     this.image=''
            //     this.isUploaded=true
            // },2000)

            
        }
    }
}
</script>

<style>

</style>