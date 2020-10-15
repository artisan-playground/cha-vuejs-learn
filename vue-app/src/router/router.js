import Vue from 'vue'
import VueRouter from 'vue-router'
import profile from '../page/profile.vue'
import education from '../page/education.vue'
import activity from '../page/activity.vue'
import header from '../components/header.vue'
import footer from '../components/footer.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/header',
    name: 'header',
    component: header,
  },
  {
    path: '/footer',
    name: 'footer',
    component: footer,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
