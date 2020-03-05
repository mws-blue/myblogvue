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
import Xueyuan from '../views/Xueyuan.vue'

>>>>>>> 5d788aeb3656100017cbeb7e1a8a4ddd281fdee5
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
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/platform',
        name: 'platform',
        component: Platform
    },
    {
        path: '/xueyuan',
        name: 'Xueyuan',
        component: Xueyuan
    },
    {
        path: '/Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            isLogin: false
        }
    },
    {
        path: '/Register',
        component: () =>
            import ('../views/Register.vue'),
        meta: {
            isLogin: false
        }
    }

>>>>>>> 5d788aeb3656100017cbeb7e1a8a4ddd281fdee5
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router