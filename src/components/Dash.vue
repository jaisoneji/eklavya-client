<template>
  <!-- main div with the theme -->
  <div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">
    <!-- sidebar start -->
    <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
        :to="href"
      />
      <!-- sidebar start ends-->
        <router-view />
        <Classroom/>
        <Quizzes></Quizzes>
        <Scheduled></Scheduled>
        <!-- Main right contents of the dashboard -->
        <!-- container div of clasroom, quizzes and schedule -->
        <div class="border flex flex-col w-1/2 ">
            <!-- classroom -->
            <div class="border flex flex-col ">
                <p :class="theme" class="eklavya text-text-text text-2xl">Classroom</p>
                <button class="flex font-bold text-xl text-white bg-background-secondary rounded outline-none align-center " :class="theme">Create</button>          
            </div>
            <!-- classroom ends -->
            <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
             <!-- quiz -->
            <div>
                <p :class="theme" class="eklavya text-text-text text-2xl">Quizes</p>
            </div>
            <!-- quiz ends -->
            <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
             <!-- schedule -->
            <div>
                <p :class="theme" class="eklavya text-text-text text-2xl">Schedule</p>
            </div>
            <!-- schedule ends -->
        </div>
        <!-- container div of clasroom, quizzes and schedule -->
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
                        href:'',
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
                        href: '',
                        title: 'Query',
                        icon: 'fa  fa-question-circle',
                    },
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
