import { createRouter,createWebHistory } from 'vue-router'
import {bus } from '@eng/bus';
import Main from "@comp/main.vue"
import About from "@comp/about.vue"
import Altro from "@comp/altro.vue"
import jTreet from "@comp/jtreet.vue"
import jacopo from "@comp/jacopo.vue"
import test3d from "@comp/test3d.vue"


const routes = [
  { path: '/', component: Main },
  { path: '/altro/:id', component: Altro },
  { path: '/altro', component: Altro },
  { path: '/about', component: About },
  { path: '/jtreet',component:jTreet },
  { path: '/th',component:test3d },
  { path: '/jacopo/:id',component:jacopo },
  { path: '/jacopo',component:jacopo }
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

