<template>
  <Layout>
    <div class="w-full h-full flex flex-col justify-center">
      <div class="font-black text-white pt-8 text-center mb-16 font-mono">
        <h2 class="text-4xl">Sign up for my newsletters</h2>
        <span>You might end up liking what I write.</span>
      </div>
      <form v-if="!submitted" class="w-full max-w-lg mx-auto" novalidate="true" @keyup.enter="handleSubmit">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Elon" v-model="user.firstName">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Musk" v-model="user.lastName">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-email">
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="elon@tesla.com" v-model="user.email">
          </div>
        </div>
        <p v-if="hasErrors" class="mb-4 font-mono text-indigo-500">
          <b>Please correct the following error(s):</b>
          <ul class="list-disc">
            <li v-for="error in user.errors" :key="error" class="ml-8">{{ error }}</li>
          </ul>
        </p>
        <button
          class="w-full hover:bg-white font-black rounded py-2 px-8 mb-12 font-mono text-white border-4 border-white hover:text-black mx-auto"
          type="button"
          @click="handleSubmit">
          Submit 
        </button>
      </form>
      <div v-else class="p-6 mx-6 mb-4 border-l-8 bg-white border-indigo-500 italic text-gray-800" role="alert">
        <p class="font-bold">Thank you</p>
        <p>You've signed up for my newsletter.  If I remember to, I will send an email to you after a new post is up.</p>
        <div class="font-black text-center font-mono text-indigo-500">
          <span>I am a visionary.</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    title: 'Newsletter'
  },
  data() {
    return {
      submitted: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        errors: ['error one'],
      }
    }
  },
  computed: {
    hasErrors() {
      return this.user.errors.length > 0
    }
  },
  methods: {
    handleSubmit (e) {
      this.user.errors = []
      if (!this.user.firstName) {
        this.user.errors.push("First name required.")
      }
      if (!this.user.email) {
        this.user.errors.push('Email required.')
      } else if (!this.validEmail(this.user.email)) {
        this.user.errors.push('Valid email required.')
      }
      if (!this.user.errors.length) {
        this.submitForm()
        return true
      }
      e.preventDefault()
    },
    addSubscriber() {
      const data = {
        'fields': {
          'First Name': this.user.firstName,
          'Last Name': this.user.lastName,
          'Email Address': this.user.email,
        }
      }
      if (!this.submitted) {
        const baseKey = process.env.GRIDSOME_AIRTABLE_BASE
        const apiKey = process.env.GRIDSOME_AIRTABLE_API
        axios
          .post(`https://api.airtable.com/v0/${baseKey}/Subscribers`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            }
          })
          .then(() => {console.log('Sucessfully Added.')})
        this.submitted = true
      }
    },
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
