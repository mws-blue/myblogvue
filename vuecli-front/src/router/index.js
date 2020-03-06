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
        component: Home,

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
        path: '/Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            Lostate: true
        }
    },
    {
        path: '/Register',
        component: () =>
            import ('../views/Register.vue'),

    },
    {
        path: '/userinfo',
        component: () =>
            import ('../views/userinfo/userinfo.vue'),
        children: [{
                path: 'pensonal',
                component: () =>
                    import ('../views/userinfo/pensonal.vue'),

            },
            {
                path: 'attention',
                component: () =>
                    import ('../views/userinfo/attention.vue'),

            },
            {
                path: 'collect',
                component: () =>
                    import ('../views/userinfo/collect.vue'),
            }
        ]


    },
    {
        path: '/myBlogs',
        component: () =>
            import ('../views/myBlogs.vue'),

    },
    {
        path: '/manageBlogs',
        component: () =>
            import ('../views/manageBlogs.vue'),

    }


]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})



export default router