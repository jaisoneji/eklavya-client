<template>
  <div class="flex flex-wrap w-full h-full p-2 overflow-y-scroll">
    <div class="w-full ">
      <ul class="flex md:w-full mb-0 list-none space-y-2 md:space-y-0 flex-wrap pt-3 pb-4 flex-col md:flex-row">
        <li class="cursor-pointer m-0 mr-2 last:mr-0 flex-auto text-center">
          <a class=" text-xs font-bold uppercase border px-12 py-3 shadow-xl rounded-lg block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-text bg-white': openTab !== 1, 'text-white bg-background-secondary': openTab === 1}">
            Scrape
          </a>
        </li>
        <li class="cursor-pointer mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-12 py-3 shadow-xl rounded-lg block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-text bg-white': openTab !== 2, 'text-white bg-background-secondary': openTab === 2}">
            Image OCR
          </a>
        </li>
        <li class="cursor-pointer last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-12 py-3 shadow-xl rounded-lg block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-text bg-white': openTab !== 3, 'text-white bg-background-secondary': openTab === 3}">
            Generate from Text
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words h-full w-full mb-6 shadow-xl rounded">
        <div class=" ">
          <div class="">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}" >
              <Scrape class=""/>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <ImageOCR></ImageOCR>
              <!-- </Scrape> -->
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <!-- </Scrape> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scrape from '@/components/TeachersComponents/Scrape.vue';
import ImageOCR from '@/components/TeachersComponents/ImageOCR.vue';



export default {
   name:'Collapse',
    components:{
      Scrape,
      ImageOCR
    },
    data() {
      return {
        openTab: 1
      }
    },
    methods: {
      toggleTabs: function(tabNumber){
        this.openTab = tabNumber
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
 }
}
</script>

