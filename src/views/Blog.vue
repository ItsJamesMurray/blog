<template>
<div class="py-24">
  <div v-if=loading>
    <Loading />
  </div>
  <div v-else class="w-3/4 flex-col m-auto">
    <h2 class="text-3xl font-black pt-8">All Posts:</h2>
    <BlogRoll
      v-for="(post, idx) in posts"
      :key="idx+100"
      :post="post"
    />
  </div>
</div>
</template>

<script>

import BlogRoll from '@/components/BlogRoll/BlogRoll'
import Loading from '@/components/Loading/Loading'

export default {
  name: 'blog',
  components: {
    BlogRoll,
    Loading
   },
  computed: {
    loading () {
      return this.$store.state.blogPosts.loading
    },
    posts () {
      return this.$store.state.blogPosts.blogPosts
    }
  }
}
</script>
