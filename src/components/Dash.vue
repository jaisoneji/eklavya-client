<template>
  <!-- main div with the theme -->
  <div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">
    <sidebar-menu :menu="menu" class="md:w-1/3 "
        :class="theme"
        :to="href" />
        <router-view  class="md:ml-56 md:w-4/6 border h-full flex items-center "/>
        <Classroom />
        <Collapse />
        <Quizzes></Quizzes>
        <Scheduled></Scheduled>
  
  </div>
  <!-- main div with the theme ends-->
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
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
                        href:'/EmailError',
                        title: 'EmailError',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/Login',
                        title: 'Login',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    },
                    
                    {
                        href: '/Collapse',
                        title: 'Query',
                        icon: 'fa fa-chart-area',
                    },
                ],
                collapsed: false,
                selectedTheme: '',
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