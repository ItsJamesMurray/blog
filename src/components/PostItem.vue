<template>
  <g-link
    :to="post.path"
    class="h-12 border-solid border-4 border-white text-white pl-5 py-2 my-2 rounded hover:bg-white hover:text-gray-800 cursor-pointer overflow-auto truncate"
  >
    <span class="font-mono hidden sm:inline-block mr-5 w-1/8">{{date}}</span>
    <span class="text-left w-auto font-semibold">{{post.title}}</span>
    <span
      class="text-indigo-500 text-sm ml-5 font-black font-mono mr-10 w-1/6"
    >{{post.timeToRead}} min read</span>
  </g-link>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    }
  }
}
</script>