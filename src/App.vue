<template>
  <div id="app" class="">
    <Navbar />
    <router-view
      class="pt-12 min-h-screen"
      :class="darkMode ? 'bg-gray-800 text-gray-200':''"
      />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'I am a visionary',
      titleTemplate: '%s - ItsJamesMurray',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    }
  },
  created() {
    if(Object.keys(this.$store.state.blogPosts.blogPosts === 0)) {
      this.$store.dispatch('loadPosts')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
