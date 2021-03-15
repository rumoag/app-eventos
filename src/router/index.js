import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Charla from '../views/Charla.vue'
import Inscribirte from '../views/Inscribirte.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About
  },
  {
    path: '/charla/:oradorId',
    name: 'Charla',
    component: Charla
  },
  {
    path: '/inscribirte/',
    name: 'Inscribirte',
    component: Inscribirte
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
