<template>
  <!-- main div with the theme -->
  <div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">

    <!-- sidebar start -->
    <sidebar-menu
        :menu="menu" class="md:w-1/3 "
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
        :to="href"
      />
      <!-- sidebar start ends-->
        <router-view  class="md:ml-56 md:w-4/6 border h-full flex items-center "/>
        <Classroom/>
        <Collapse/>
        <Quizzes></Quizzes>
        <Scheduled></Scheduled>
        <!-- Main right contents of the dashboard -->
       


  </div>
  <!-- main div with the theme ends-->
</template>
<script>

import { SidebarMenu } from 'vue-sidebar-menu'

const separator = {

}
export default {
  data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Eklavya',
                        hiddenOnCollapse: true
                    },
                    {
                        header:'true',
                        title: 'circle profiler',
                    
                    },
                    {
                        component: separator
                    },
                    {
                        header: true,
                        title: 'Classroom',
                        hiddenOnCollapse: true
                    },
                    // quizes start
                    {
                        header: true,
                        title: 'Quizes',
                        hiddenOnCollapse: true
                    },
                    {
                        href:'/Collapse',
                        title: 'Create Quiz',
                        icon: 'fa fa-list-alt'
                    },
                    {
                        href:'',
                        title: 'Blank Quiz',
                        icon: 'fa fa-list-alt'
                    },
                    // quizes ends
                    // schedule start
                    {
                        header: true,
                        title: 'Scheduled',
                        hiddenOnCollapse: true
                    },
                    // scedule ends
                    // settings
                    {
                        href:'',
                        title: 'Settings',
                        icon: 'fa fa-gears '
                    },
                ],
                collapsed: false,
                themes: [
                    {
                    name: 'Default theme',
                    input: ''
                    },
                    {
                    name: 'White theme',
                    input: 'white-theme'
                    }
                ],
                selectedTheme: 'Default theme   ',
                isOnMobile: false
            }
        },
        mounted () {
            this.onResize()
            window.addEventListener('resize', this.onResize)
        },
        
        
  components: {
        SidebarMenu
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
        hideError(){
            this.$emit('hideError')
        },
        onToggleCollapse (collapsed) {
            console.log(collapsed)
            this.collapsed = collapsed
        }
    }
}
</script>
<style >

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
.v-sidebar-menu .vsm-arrow:after{font-family: FontAwesome}

.v-sidebar-menu .collapse-btn:after {
content: "\f07e";
font-family: FontAwesome;
}

</style>
