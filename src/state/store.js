import Vue from 'vue'
import Vuex from 'vuex'

import darkMode from './modules/darkMode'
import blogPosts from './modules/blogPosts'
import subscribe from './modules/subscribe'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    darkMode: darkMode,
    blogPosts: blogPosts,
    subscribe: subscribe
  }
})
