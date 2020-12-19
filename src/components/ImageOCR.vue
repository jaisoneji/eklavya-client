<template>
  <div>
      <div>
        <!-- ---Image divv-------------- -->
        <div class="flex flex-col space-y-4 align-center items-center justify-center">
            <h3 class="text-text-btn text-xl font-bold md:mt-2">Upload Image Below</h3>
            <div class="md:w-4/5 w-11/12 h-80 md:h-80 shadow-lg flex flex-1 bg-gray-300">
                <img :src="uploadedPicture">
            </div>
            <div class="flex w-full align-center items-center justify-center">
                <label v-if="isUploading===false" class="mx-2 row-2 border text-center placeholder-blue-700 cursor-pointer bg-white text-text-btn rounded-full w-1/3 md:w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none align-center" :class="theme">
                    <input @onChange="openFile(event)" class="hidden" accept="image/*" type="file"/>
                    Select File
                </label>
                <button v-else class="mx-2 row-2 border bg-white text-text-btn rounded-full w-1/4 h-10  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-60 transition ease-in-out duration-300 hover:shadow-outline text-xl font-bold rounded outline-none align-center" :class="theme">Upload</button>
            </div>
        </div>
        <!-- --------Image div ends here---- -->
        <!-- ------------Generated Quetions---- -->
        <div></div>
        <!-- --------Generated questions div ends here------ -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isUploading:false,
            uploadedPicture:''
        }
    },
    methods:{
        openFile(event){
            console.log(event.target.files[0])

        }
    }
}
</script>

<style>

</style>