<template>
  <!-- main div with the theme -->
  <div class="flex justify-center align-center items-center content-center w-screen h-screen bg-background-primary" :class="theme">
    <sidebar-menu :menu="menu"
        :class="theme"
        :to="href" />
        <router-view />
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
                        href: '/charts',
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