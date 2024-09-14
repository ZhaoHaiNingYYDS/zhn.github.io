import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../views/xhTest/index.vue'),
        },
        {
            path: '/threeView',
            name:'threeView',
            component:()=>import('@/views/xhTest/threeView/index.vue')
        },
        {
            path: '/giveView',
            name:'giveView',
            component:()=>import('@/views/xhTest/give/index.vue')
        },
        {
            path: '/login',
            component: () => import('@/views/login'),
            hidden: true
        }

    ]
})

export default router
