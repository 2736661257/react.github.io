import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ShopCart from '../components/ShopCart.vue'

const routes = [
    {
        name: "shopcart",
        path: "/",
        conmponent: ShopCart
    }
]

const router = new VueRouter({routes})

export default router