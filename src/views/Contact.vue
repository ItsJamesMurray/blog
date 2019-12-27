<template>
  <div :class="darkMode ? 'bg-gray-800 text-gray-200':''">
    <div class="flex-col justify-center m-auto w-3/4">
      <div class="font-black pt-8 text-center mb-16">
        <h2 class="text-4xl">Sign up for my newsletters</h2>
        <span>You might end up liking what I write.</span>
      </div>
      <form v-if="!submitted" class="w-full max-w-lg m-auto" novalidate="true" @keyup.enter="handleSubmit">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Elon" v-model="user.firstName">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Musk" v-model="user.lastName">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="elon@tesla.com" v-model="user.email">
          </div>
        </div>
          <p v-if="hasErrors" class="mb-4 text-red-500">
            <b>Please correct the following error(s):</b>
            <ul class="list-disc">
              <li v-for="error in user.errors" :key="error" class="ml-8">{{ error }}</li>
            </ul>
          </p>
        <button
          class="w-full font-black rounded py-4 px-8 mb-12  hover:text-gray-200 mx-auto"
          :class="hasErrors ? 'bg-red-200 text-red-700 hover:bg-red-500': 'bg-blue-200 text-blue-700 hover:bg-blue-500'"
          type="button"
          @click="handleSubmit">
          {{ buttonText }}
        </button>
      </form>
      <div v-else class="bg-yellow-200 border-l-4 border-yellow-500 text-gray-800 p-4" role="alert">
        <p class="font-bold">Thank you</p>
        <p>You should receive a confirmation email shortly.</p>
      </div>
      <div class="font-black pt-8 text-center">
        <span>I am a visionary.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data () {
    return {
      submitted: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        errors: []
      }
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode.darkMode
    },
    hasErrors() {
      return this.user.errors.length > 0
    },
    buttonText() {
      if (this.hasErrors) {
        return 'Retry'
      } else {
        return 'Sign Up'
      }
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
    submitForm () {
      const data = {
        'records': [
          {
            'fields': {
              'First Name': this.user.firstName,
              'Last Name': this.user.lastName,
              'Email Address': this.user.email,
            }
          }
        ]
      }
      this.$store.dispatch('addSubscriber', data)
      this.submitted = true
    },
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
