
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Blog from "../views/Blog.vue";
import Platform from "../views/Platform.vue";
import Xueyuan from '../views/Xueyuan.vue'
import Wenda from '../views/Wenda.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
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
	    path: '/wenda',
	    name: 'Wenda',
	    component: Wenda
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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router