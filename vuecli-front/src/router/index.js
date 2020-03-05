<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xueyuan from '../views/Xueyuan.vue'

=======
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Blog from "../views/Blog.vue";
import Platform from "../views/Platform.vue";
>>>>>>> 4064b3bb9f120487a020d2117df8090837a3b4bb
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
<<<<<<< HEAD
	{
	        path: '/xueyuan',
	        name: 'Xueyuan',
	        component: Xueyuan
	    }
=======
    {
        path:'/blog',
        name:'blog',
        component:Blog
    },
    {
        path:'/platform',
        name:'platform',
        component:Platform
    }
>>>>>>> 4064b3bb9f120487a020d2117df8090837a3b4bb
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router