<template>
  <!-- main div with the theme -->
  <div class=" flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">
    <div @click.prevent="logout()" :class="theme" class="align-center flex justify-center text-text-text absolute top-0 right-0 mt-4 mr-20 bg-background-secondary text-center rounded-lg  w-20 h-8">
        <p class="text-white focus:outline-none">Logout</p>
    </div>
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
import ProfilePic from '../components/ProfilePic'
import VueCookies from 'vue-cookies'



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
                        icon: 'fas fa-pen'
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
                selectedTheme: 'Default theme   ',
                isOnMobile: true
            }
        },
        
components: {
        SidebarMenu,
        
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
        logout(){
            localStorage.clear()
            VueCookies.remove("token")
            this.$router.push('/')
        
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
