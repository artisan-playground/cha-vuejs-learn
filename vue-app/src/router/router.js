  
import Vue from 'vue'
import VueRouter from 'vue-router'
import bar from '../page/bar.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/bar',
        name: 'bar',
        component: bar
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router