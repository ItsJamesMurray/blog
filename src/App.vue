<template>
  <div id="app">
    <component
      :is="view"
      id="app-main"
    >
      <router-view />
    </component>
  </div>
</template>

<script>
const defaultView = 'ViewDefault'

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
  computed: {
    view () {
      return (this.$route.meta.view || defaultView)
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
