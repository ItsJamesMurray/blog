<template>
  <div
    class="h-auto pin-b py-6 flex flex-col float-right w-full pl-12"
    :class="darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white'">
    <div class="text-center flex pb-6">
      <ul v-for="(item, idx) in footerItems"
        :key="idx"
        class="text-left mr-16 text-sm"
      >
        <li class="font-black text-md">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <p class="text-gray-500 text-xs ">Made with ❤️by James Murray in Chicago 🏙️</p>
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
          link: '/contact'
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
