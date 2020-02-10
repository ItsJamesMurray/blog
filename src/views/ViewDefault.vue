<template>
  <div id="view-default">
      <AppNav />
      <router-view
        class="min-h-screen"
        :class="darkMode ? 'bg-gray-800 text-gray-200':''"
        name="default"
      />
      <AppFooter />
  </div>
</template>

<script>
import AppNav from '@/components/App/AppNav'
import AppFooter from '@/components/App/AppFooter'

export default {
  name: 'ViewDefault',
  components: {
    AppNav,
    AppFooter
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    },
  },
  created() {
    if(Object.keys(this.$store.state.blogPosts.blogPosts === 0)) {
      this.$store.dispatch('loadPosts')
    }
  }
}
</script>
