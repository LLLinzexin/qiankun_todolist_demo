import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            key: 'Home',
            title: '首页'
        },
        {
            path: '/todolist_vue3',
            key: 'todolist_vue3',
            title: 'vue3_origin',
        },
        {
            path: '/todolist_vue3_setup',
            key: 'todolist_vue3_setup',
            title: 'vue3_setup',
        }
    ],
    mode: 'history',
})

export default router

