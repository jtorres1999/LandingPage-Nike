import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Productos',
    
    component: () => import(/* webpackChunkName: "about" */ '../components/Productos.vue')
  },
  {
    path: '/Contactenos',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contactenos.vue')
  },
  {
    path: '/Sensor-de-temperatura-y-humedad',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto1.vue')
  },
  {
    path: '/Sensor-de-temperatura',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto2.vue')
  },
  {
    path: '/Multisensor-de-planta-electrica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto3.vue')
  },
]

const router = new VueRouter({
  mode: 'history', 
  routes
})

export default router
