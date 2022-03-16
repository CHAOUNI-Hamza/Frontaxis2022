import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/About.vue'
import Login from '../components/BackComponents/Login.vue'
import Axis from '../components/BackComponents/Axis.vue'
import Client from '../components/BackComponents/Client.vue'
import Companie from '../components/BackComponents/Companie.vue'
import Contact from '../components/BackComponents/Contact.vue'
import Produit from '../components/BackComponents/Produit.vue'
import Service from '../components/BackComponents/Service.vue'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      
      if(store.getters['auth/authentication']) {
        return next({ name: 'Admin' })
      }

      next()

    }
  },
  {
    path: '/admin/axis',
    name: 'Axis',
    component: Axis,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  },
  {
    path: '/admin/contact',
    name: 'Contact',
    component: Contact,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  },
  {
    path: '/admin/client',
    name: 'Client',
    component: Client,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  },
  {
    path: '/admin/companie',
    name: 'Companie',
    component: Companie,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  },
  {
    path: '/admin/produit',
    name: 'Produit',
    component: Produit,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  },
  {
    path: '/admin/service',
    name: 'Service',
    component: Service,
    beforeEnter: (to, from, next) => {
      
      if(!store.getters['auth/authentication']) {
        return next({ name: 'Login' })
      }

      next()

    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
