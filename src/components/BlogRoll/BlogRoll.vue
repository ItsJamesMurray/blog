<template>
  <div class="flex-col mx-auto mt-2 h-18" :class="darkMode ? 'text-gray-200':''">
    <div
      class="flex items-center sm:m-2 py-2 sm:px-8 rounded cursor-pointer justify-between h-12 "
      :class="darkMode ? 'hover:bg-gray-900':'hover:bg-gray-200'"
      @click="navToPost()">
      <div class="w-2/12">
        <img v-if="!post.fields.Image" src="@/assets/img/me.png" class="rounded h-10 w-10"/>
        <img v-else v-for="(image, idx) in post.fields.Image"
          :key=idx+100
          :src=image.thumbnails.large.url
          class="rounded h-10"
        />
      </div>
      <div class="flex w-10/12 h-16">
        <p class="pl-4 sm:text-xl font-bold my-auto truncate leading-normal w-9/12">
          {{ post.fields.Title }}
        </p>
        <div class="flex w-3/12 m-auto truncate justify-end truncate">
          <div v-for="(indicator, idx) in post.fields.Indicator"
            :key=idx+10
            class="rounded mx-2 p-2 text-xs sm:text-sm truncate  font-bold shadow-lg text-left"
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
      this.$router.push(`/blog/${post.fields['URL Slug']}`)
    }
  }
}
</script>
