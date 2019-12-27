import axios from 'axios'

const module = {
  state: {
    firstName: '',
    lastName: '',
    email: ''
  },
  actions: {
    addSubscriber({commit}, data) {
      const baseKey = process.env.VUE_APP_AIRTABLE_BASE
      const apiKey = process.env.VUE_APP_AIRTABLE_API
      axios
        .post(`https://api.airtable.com/v0/${baseKey}/Subscribers`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        })
        .then(() => {
          commit('SUBSCRIBER', data)
        })
    }
  },
  mutations: {
    SUBSCRIBER: (state, data) => {
      state.firstName = data.records.fields['First Name']
      state.lastName = data.records.fields['Last Name']
      state.email = data.records.fields['Email Address']
    }
  }
}

export default module
