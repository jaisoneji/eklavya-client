<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-text bg-white': openTab !== 1, 'text-white bg-background-secondary': openTab === 1}">
            Profile
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-text bg-white': openTab !== 2, 'text-white bg-background-secondary': openTab === 2}">
            Settings
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-text bg-white': openTab !== 3, 'text-white bg-background-secondary': openTab === 3}">
            Options
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <p>
                <!-- </Scrape> -->
              </p>
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
// import Scrape from '@/components/Scrape.vue';



export default {
   name:'Collapse',
    components:{
      // Scrape
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
           data() {
    return {
      openTab: 1
    }
  },

        methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
       
 }
}
</script>

