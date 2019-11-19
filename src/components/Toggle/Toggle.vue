<template>
  <div
    :class="darkMode ? 'bg-yellow-500' : 'bg-gray-200'"
    class="w-12 h-6 rounded-full shadow inline-block cursor-pointer"
    @click="toggleDarkMode()"
  >
    <div
      :style="{ transform: `translateX(${darkMode ? 100 : 0}%)` }"
      class="w-1/2 h-full bg-white rounded-full shadow"
    />
  </div>
</template>
<script>
export default {
  name: 'Toggle',
  computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    }
  },
  methods: {
    toggleDarkMode () {
      let currentMode = this.darkMode
      this.$store.commit('TOGGLE_DARK_MODE', !currentMode)
    }
  }
}
</script>