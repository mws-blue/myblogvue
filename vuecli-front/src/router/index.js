import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Blog from "../views/Blog.vue";
import Platform from "../views/Platform.vue";
import Xueyuan from '../views/Xueyuan.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/blog',
        name:'blog',
        component:Blog
    },
    {
        path:'/platform',
        name:'platform',
        component:Platform
    },
    {
        path: '/xueyuan',
        name: 'Xueyuan',
        component: Xueyuan
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router