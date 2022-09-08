import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

    {
        path: '/home',
        name: 'HomePage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/HomePage/homePage')
    },
    // 重定向到home
    {
        path: '/',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router