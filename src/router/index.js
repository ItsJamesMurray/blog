import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/views/Home.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: () => import('@/views/Contact.vue')
    }
  },
  {
    path: '/blog',
    name: 'blog',
    components: {
      default: () => import('@/views/Blog.vue')
    }
  },
  {
    path: '/blog/:post',
    name: 'post',
    components: {
      default: () => import('@/views/Post.vue')
    },
    props: true
  },
  {
    path: '/404',
    name: 'NotFound',
    components: {
      default: () => import('@/views/NotFound.vue')
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
