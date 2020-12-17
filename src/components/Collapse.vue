<template>
  <div class="border-red-500 flex flex-wrap w-full">
    <div class="w-full ">
      <ul class="flex md:w-full mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase border px-12 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-text bg-white': openTab !== 1, 'text-white bg-background-secondary': openTab === 1}">
            Scrape
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-12 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-text bg-white': openTab !== 2, 'text-white bg-background-secondary': openTab === 2}">
            Image OCR
          </a>
        </li>
        <li class=" last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-12 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-text bg-white': openTab !== 3, 'text-white bg-background-secondary': openTab === 3}">
            Generate from Text
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words h-full w-full mb-6 shadow-lg rounded">
        <div class="py-5 flex-auto">
          <div class="tab-content tab-space h-128">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}" class="h-full">
              <Scrape class=""/>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              
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
import Scrape from '@/components/Scrape.vue';



export default {
   name:'Collapse',
    components:{
      Scrape
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

