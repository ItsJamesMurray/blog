<template>
  <div 
    class="w-full h-auto pin-b py-6"
    :class="darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white'">
    <div class="text-center flex pb-6 ml-32">
      <ul v-for="(item, idx) in footerItems"
        :key="idx"
        class="text-left mr-16"
      >
        <li class="font-black text-md">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <p class="text-gray-500 text-xs mx-32">&copy;2019 ItsJamesMurray. All rights reserved.</p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  components: {},
  computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    },
    footerItems () {
      return [
        {
          name: 'Ko-Fi',
          link: 'https://ko-fi.com/jamesmurray'
        },
        {
          name: 'Newsletters',
          link: 'https://www.itsjamesmurray/contact'
        },
        {
          name: 'RSS',
          link: 'https://www.itsjamesmurray.com/rss.xml'
        }
      ]
    }
  }
}
</script>