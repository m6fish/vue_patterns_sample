import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: About
    },
    {
        path: '/propsSync',
        name: 'propsSync',
        component: r => require.ensure([], () => r(require('@V/propsSync')), 'propsSync')
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
