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
    }, {
        path: '/FP',
        name: 'FP',
        component: r => require.ensure([], () => r(require('@V/functionalComponent')), 'FP')
    }, {
        path: '/vslot',
        name: 'vslot',
        component: r => require.ensure([], () => r(require('@V/vslot')), 'vslot')
    }, {
        path: '/renderless',
        name: 'renderless',
        component: r => require.ensure([], () => r(require('@V/renderless')), 'renderless')
    }, {
        path: '/renderProps',
        name: 'renderProps',
        component: r => require.ensure([], () => r(require('@V/renderProps')), 'renderProps')
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
