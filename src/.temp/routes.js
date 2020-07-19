const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/src/pages/Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--around-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/src/pages/Around.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jamesmurray/github/ItsJamesMurray/blog/src/pages/Index.vue")

export default [
  {
    path: "/blog/:slug/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    path: "/around/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
