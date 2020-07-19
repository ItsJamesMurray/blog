<template>
  <div>
    <h1 class="text-2xl my-4 font-semibold underline text-white">{{year}}</h1>
    <div class="flex flex-col overflow-x">
      <PostItem 
        :key="post.node.id" 
        v-for="post in this.postsByYear" 
        :post="post.node" 
      />
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem';
export default {
  props: ["year"],
  components: {
    PostItem
  },
  computed: {
    postsByYear() {
      const posts = this.$page.allPost.edges;
      return posts.filter((post) => {
        return post.node.date.includes(this.year);
      })
    }
  }
};
</script>