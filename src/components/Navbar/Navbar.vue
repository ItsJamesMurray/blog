<template>
  <div
    :class="[darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white', isOpen ? '' : 'flex justify-between']"
    class="fixed w-full shadow items-center h-auto px-12 sm:px-32 text-lg font-bold border-transparent">
    <div class="flex justify-between w-5/6 sm:w-2/3">
      <div class="my-1 h-12">
        <router-link to="/" class="flex items-center">
          <span class="text-3xl sm:pr-4">👋</span>
          <span class="sm:block" :class="isOpen ? 'pl-4': 'hidden'">ItsJamesMurray</span>
        </router-link>
      </div>
      <button type="button"
        class="block mr-4 sm:hidden hover:text-gray-600 "
        :class="darkMode ? 'nav-transition-dark' : 'nav-transition-light'"
        @click="isOpen = !isOpen">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          <path v-else fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        </svg>
      </button>
    </div>
    <div class="block mb-8 sm:mb-0 sm:flex items-center justify-end"
      :class="isOpen ? 'block' : 'hidden'">
      <div v-for="(item, idx) in navItems"
        :key="idx"
        :class="[darkMode ? 'nav-transition-dark' : 'nav-transition-light', isOpen ? 'mb-2 bg-gray-600 px-2 rounded h-12' : '' ]"
        class="nav-transition sm:pl-4  m-auto"
        @click="isOpen = false">
        <router-link :to="item.routePath" class="flex justify-center py-2" >
            {{item.text}}
        </router-link>
      </div>
      <div v-for="(link, idx) in navLinkItems"
        :key="idx+100"
        class="text-3xl sm:pl-4  m-auto"
        :class="isOpen ? 'mb-2 bg-gray-600 px-2 rounded h-12' : ''"
        @click="isOpen = false">
        <a :href="link.url" target="_blank" class="flex justify-center">
          {{ link.img }}
        </a>
      </div>
    </div>
      <Toggle class="m-auto fixed top-0 right-0 mr-12 mb-4 mt-4"/>
  </div>
</template>

<script>
import Toggle from '@/components/Toggle/Toggle'

export default {
  name: 'Navbar',
  data() {
    return{
      isOpen: false
    }
  },
  components: {
    Toggle
  },
  computed: {
    darkMode () {
       return this.$store.state.darkMode.darkMode
       },
    navItems () {
      return [
        {
          text: 'Blog',
          routePath: '/blog',
          routeName: 'Blog'
        },
        {
          text: 'Contact',
          routePath: '/contact',
          routeName: 'Contact'
        }
      ]
    },
    navLinkItems () {
      return [
        {
          img: '👨‍💻',
          url: 'https://github.com/ItsJamesMurray'
        },
        {
          img: '🐦',
          url: 'https://www.twitter.com/ItsJamesMurray',
        },
        {
          img: '☕',
          url: 'https://ko-fi.com/jamesmurray',
        }
      ]
    }
  }
}
</script>
<style scoped>

  .nav-transition:after {
    display: block;
    content: '';
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    @apply border-b-4;
  }

  .nav-transition:hover:after {
    transform: scaleX(1);
  }

  .nav-transition-light:after {
    @apply border-gray-800;
  }

  .nav-transition-dark:after {
    @apply border-gray-200;
  }

</style>
