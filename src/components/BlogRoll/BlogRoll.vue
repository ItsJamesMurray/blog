<template>
  <div class="flex-col mx-auto mt-2" :class="darkMode ? 'text-gray-200':''">
    <div
      class="flex items-center sm:m-2 py-2 sm:px-8 rounded cursor-pointer justify-between h-12 "
      :class="darkMode ? 'hover:bg-gray-900':'hover:bg-gray-200'"
      @click="navToPost()">
      <div class="sm:w-1/12">
        <img v-if="!post.fields.Image" src="@/assets/img/me.png" class="rounded h-10 w-10"/>
        <img v-else v-for="(image, idx) in post.fields.Image"
          :key=idx+100
          :src=image.thumbnails.large.url
          class="rounded h-10"
        />
      </div>
      <div class="flex justify-between w-11/12">
        <p class="pl-4 sm:text-xl font-bold text-left align-top overflow-hidden leading-none">
          {{ post.fields.Title }}
        </p>
        <div class="flex w-auto">
          <div v-for="(indicator, idx) in post.fields.Indicator"
            :key=idx+10
            class=" rounded m-1 pl-1 pr-2 text-xs sm:text-sm font-bold shadow-lg"
            :class="darkMode ? 'bg-yellow-500 text-gray-900':'bg-yellow-200 text-yellow-700'">
            {{ indicator }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogRoll',
  components: {},
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode.darkMode
    }
  },
  methods: {
    navToPost () {
      const post = this.post
      this.$store.commit('SELECT_POST', post)
      this.$router.push(`/blog/${post.fields['URL Slug']}`)
    }
  }
}
</script>
