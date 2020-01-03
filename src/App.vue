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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph / Facebook
        { vmid: 'og:title', property: 'og:title', content: 'I am a visionary - ItsJamesMurray'},
        { vmid: 'og:type', property: 'og:type', content: 'article'},
        { vmid: 'og:url', property: 'og:url', content: 'https://www.itsjamesmurray.com'},
        { vmid: 'og:description', property: 'og:description', content: 'I created this site as a place to fail in public. I know I want to build something great—I\'m just not quite sure I\'ve found out what yet. I\'ll be using this little corner of the internet to document my journey.'},
        { vmid: 'og:image', property: 'og:image', content: 'https://www.itsjamesmurray.com/img/visionary.png'},
        // Twitter
        { vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
        { vmid: 'twitter:url', property: 'twitter:url', content: 'https://www.itsjamesmurray.com'},
        { vmid: 'twitter:title', property: 'twitter:title', content: 'I am a visionary - ItsJamesMurray'},
        { vmid: 'twitter:description', property: 'twitter:description', content: 'I created this site as a place to fail in public. I know I want to build something great—I\'m just not quite sure I\'ve found out what yet. I\'ll be using this little corner of the internet to document my journey.'},
        { vmid: 'twitter:image', property: 'twitter:image', content: 'https://www.itsjamesmurray.com/img/visionary.png'}
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
