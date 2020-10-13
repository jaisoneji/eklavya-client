<template>
  <!-- main div with the theme -->
  <div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">
    <div @click.prevent="logout()" :class="theme" class="align-center flex justify-center text-text-text absolute top-0 right-0 mt-4 mr-20 bg-background-secondary text-center rounded-lg  w-20 h-8">
        <p class="text-white focus:outline-none">Logout</p>
    </div>
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
        <router-view  class="md:ml-80 md:w-2/3 border h-132 flex w-10/12 ml-12"/>
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
