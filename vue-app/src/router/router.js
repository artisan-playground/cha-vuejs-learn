import Vue from 'vue'
import VueRouter from 'vue-router'
import profile from '../page/profile.vue'
import education from '../page/education.vue'
import activity from '../page/activity.vue'
import index from '../page/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
  },
  {
    path: '/education',
    name: 'educaion',
    component: education,
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
