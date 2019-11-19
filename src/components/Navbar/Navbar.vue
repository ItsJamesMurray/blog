<template>
  <div 
    :class="darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white'"
    class="fixed w-full shadow flex items-center justify-between px-32 h-16 text-lg border-b-4 font-bold border-transparent">
    <div class="flex items-center w-2/3">
      <router-link to="/">
        <span class="text-3xl pr-4 align-middle">👋</span>
        <span>ItsJamesMurray</span>
      </router-link>
    </div>
    <div class="flex items-center w-1/3 justify-end">
      <div v-for="(item, idx) in navItems"
        :key="idx"
        :class="darkMode ? 'nav-transition-dark' : 'nav-transition-light' "
        class="nav-transition pl-4">
        <router-link :to="item.routePath">
            {{item.text}}
        </router-link>
      </div>
      <div v-for="(link, idx) in navLinkItems"
        :key="idx+100"
        class="text-3xl pl-4">
        <a :href="link.url" target="_blank">
          {{ link.img }}
        </a>
      </div>
      <Toggle  class="ml-4"/>
    </div>
  </div>
</template>

<script>
import Toggle from '@/components/Toggle/Toggle'

export default {
  name: 'Navbar',
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
          text: 'Me',
          routePath: '/me',
          routeName: 'Me'
        },
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
  display:block;
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