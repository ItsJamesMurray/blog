import axios from 'axios'

const module = {
  state: {
    blogPosts: {},
    selectedPost: {},
    // error: false,
    loading: true
  },
  actions: {
    loadPosts({ commit }) {
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
        .then(r => r.data.records)
        .then(blogPosts => {
          commit('LOAD_POSTS', blogPosts)
        })
    },
    fetchPost({commit}, params) {
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
          .then(r => r.data.records)
          .then(blogPost => {
            commit('SELECT_POST', blogPost[0])
            resolve()
          })
      })
    }
  },
  mutations: {
    LOAD_POSTS: (state, blogPosts) => {
      state.blogPosts = blogPosts
      state.loading = false
    },
    SELECT_POST: (state, post) => {
      state.selectedPost = post
      state.loading = false
    }
  }
}

export default module
