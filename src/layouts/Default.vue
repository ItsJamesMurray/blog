<template>
  <div class="layout">
    <header
      v-if="!isHome"
      class="w-screen fixed bg-transparent top-0 left-0 flex h-20"
      :class="!isHome && scrollPosition > 20 ? 'transparentNav' : ''">
      <!-- <div
        class="h-2 bg-indigo-500 w-screen"
        :style="{ width: `${percentScroll}%`}"
        >
      </div> -->
      <g-link
        class="ml-6 md:ml-20 mt-4 my-auto fixed border-solid border-4 border-white text-white text-center font-bold py-2 px-3 rounded-full hover:bg-white hover:text-gray-800" to="/">
        ←
      </g-link>
    </header>
    <slot/>
    <div class="flex mb-12">
      <p class="text-white text-xs text-center">Made with ❤️ by James Murray in Chicago 🏙️</p>
    </div>
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
  metaInfo() {
    return {
      meta: [
        {
          vmid: 'og:description',
          property: 'og:description',
          content: 'I created this site as a place to fail in public. I know I want to build something great—I\'m just not quite sure I\'ve found out what yet. I\'ll be using this little corner of the internet to document my journey.'
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: 'https://www.itsjamesmurray.com'
        },
        {
          vmid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: 'https://www.itsjamesmurray.com/assets/visionary.png'
        },
        {
          vmid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          vmid: 'twitter:url',
          property: 'twitter:url',
          content: 'https://www.itsjamesmurray.com'
        },
        {
          vmid: 'twitter:title',
          property: 'twitter:title',
          content: 'I am a visionary - ItsJamesMurray'
        },
        {
          vmid: 'twitter:description',
          property: 'twitter:description',
          content: 'I created this site as a place to fail in public. I know I want to build something great—I\'m just not quite sure I\'ve found out what yet. I\'ll be using this little corner of the internet to document my journey.'
        },
        {
          vmid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://www.itsjamesmurray.com/assets/visionary.png'
        }
      ]
    }
  },
  data () {
    return {
      scrollPosition: 0,
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    }
  }
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
