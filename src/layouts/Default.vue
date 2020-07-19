<template>
  <div class="layout">
    <header
      v-if="!isHome"
      class="w-screen fixed bg-transparent top-0 left-0 flex h-20"
      :class="!isHome && scrollPosition > 20 ? 'transparentNav' : ''">
      <div
        class="h-2 bg-indigo-500 w-screen"
        :style="{ transform: `translate3d(-${100 - (percentScroll)}%, 0, 0)`}"
        >
      </div>
      <g-link
        class="ml-6 md:ml-20 mt-4 my-auto fixed border-solid border-4 border-white text-white text-center font-bold py-2 px-3 rounded-full hover:bg-white hover:text-gray-800" to="/">
        ←
      </g-link>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      scrollPosition: 0,
      percentScroll: 0
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    },
    updatePercentScroll () {
      const max = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) -  window.innerHeight;
      this.percentScroll = (this.scrollPosition / max) * 100;
      return this.percentScroll;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
}
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
  background: #B2C343;
  background: -webkit-linear-gradient(top left, #B2C343, #EB11FC);
  background: -moz-linear-gradient(top left, #B2C343, #EB11FC);
  background: linear-gradient(to bottom right, #B2C343, #EB11FC);
  background-attachment: fixed;
}

.layout {
  max-width: 760px;
  height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.transparentNav {
  transition: all .2s;
  backdrop-filter: blur(10px);
}

</style>
