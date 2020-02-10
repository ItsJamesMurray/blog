import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/components/Home/Home.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: () => import('@/components/Contact/Contact.vue')
    }
  },
  {
    path: '/blog',
    name: 'blog',
    components: {
      default: () => import('@/components/Blog/Blog.vue')
    }
  },
  {
    path: '/blog/:post',
    name: 'post',
    components: {
      default: () => import('@/components/Post/Post.vue')
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
