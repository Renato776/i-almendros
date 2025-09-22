import { createRouter, createWebHistory } from 'vue-router'
import iAlmendrosApp from '@/entrypoints/iAlmendrosApp.vue'
import Profile from '@/pages/Profile.vue'
import Homescreen from '@/pages/Homescreen.vue'

const routes = [
  // { path: '/', component: iAlmendrosApp },
  { path: '/profile', component: Profile },
  { path: '/', component: Homescreen }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})