<template>
  <!-- main div with the theme -->
  <div class="flex justify-center align-center items-center content-center w-screen h-full bg-background-primary" :class="theme">
    <Logout/>
    <!-- sidebar start -->

    <sidebar-menu
        :menu="menu"
        :width="width"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        :isOnMobile="isOnMobile"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
        :to="href"
      />
      <!-- sidebar start ends-->
    <router-view  class="mt-16 pt-0 md:ml-8 ml-14 h-128 md:w-11/12 w-64 md:mt-0 md:h-130"/>
        <!-- Main right contents of the dashboard -->
       


  </div>
  <!-- main div with the theme ends-->
</template>
<script>

import { SidebarMenu } from 'vue-sidebar-menu'
import ProfilePic from '@/components/AuthenticationComponents/ProfilePic'
import Logout from '@/components/Logout'



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
                        component: ProfilePic,
                        hidden: false,
                        hiddenOnCollapse: true,
                    },
                    {
                        href:'/TeachersDashboard/',
                        title: 'Home',
                        icon: 'fas fa-home'
                    },
                    {
                        header: true,
                        title: 'Classroom',
                        hiddenOnCollapse: true
                    },
                    {
                        href:'/StudentDataLive',
                        title: 'Student Data Live',
                        icon: 'fas fa-address-card'
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
                        icon: 'fas fa-pen'
                    },
                    {
                        href:'/MCQForm',
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
                        icon: 'fa fa-cog '
                    },
                   
                ],
                width: '250px',
                
                collapsed: true,
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
                selectedTheme: 'Default theme ',
                isOnMobile: true
            }
        },
        
components: {
        SidebarMenu,
        Logout
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
/* @import "custom-var.scss";
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss"; */
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
.v-sidebar-menu .vsm-arrow:after{font-family: FontAwesome}

.v-sidebar-menu .collapse-btn:after {
content: "\f0c9";
font-family: FontAwesome;
border:1px solid red !important
}

</style>
