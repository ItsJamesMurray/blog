import axios from 'axios'
const module = {
  state: {
    blogPosts: {},
    selectedPost: {},
    // error: false,
    loading: false
  },
  mutations: {
    LOAD_POSTS: (state, blogPosts) => {
      state.blogPosts = blogPosts
    },
    SELECT_POST: (state, post) => {
      state.selectedPost = post
    },
    SET_LOADING_FLAG: (state, flag) => {
      state.loading = flag
    }
  },
  actions: {
    loadPosts({ commit }) {
      commit('SET_LOADING_FLAG', true)
      const baseKey = process.env.VUE_APP_AIRTABLE_BASE
      const apiKey = process.env.VUE_APP_AIRTABLE_API
      axios
        .get(`https://api.airtable.com/v0/${baseKey}/Blog%20Posts`,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          },
          params: {
            view: 'Published Posts'
          }
        })
        .then(resp => {
          commit('LOAD_POSTS', resp.data.records)
          commit('SET_LOADING_FLAG', false)
        })
        .catch(err => {
          commit('SET_LOADING_FLAG', false)
          throw err
        })
    },
    fetchPost({commit}, params) {
      commit('SET_LOADING_FLAG', true)
      const baseKey = process.env.VUE_APP_AIRTABLE_BASE
      const apiKey = process.env.VUE_APP_AIRTABLE_API
      return new Promise((resolve) => {
          axios
          .get(`https://api.airtable.com/v0/${baseKey}/Blog%20Posts`,
          {
            headers: {
              'Authorization': `Bearer ${apiKey}`
            },
            params: {
              view: 'Published Posts',
              filterByFormula: `AND({URL Slug} = '${params}')`
            }
          })
          .then(resp => {
            commit('SELECT_POST', resp.data.records[0])
            commit('SET_LOADING_FLAG', false)
            resolve()
          })
          .catch(err => {
            commit('SET_LOADING_FLAG', false)
            throw err
          })
      })
    }
  }
}
export default module
