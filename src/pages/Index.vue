<template>
  <Layout>
    <div class="w-full h-full flex flex-col justify-center">
      <h1 class="text-center text-4xl font-black font-mono text-white mb-16">Hi, I'm James</h1>
      <div class="flex flex-col justify-center">
        <g-link class="border-solid border-4 border-white text-white text-center font-bold py-2 my-2 rounded hover:bg-white hover:text-gray-800" to="/about">About</g-link>
        <g-link class="border-solid border-4 border-white text-white text-center font-bold py-2 my-2 rounded hover:bg-white hover:text-gray-800" to="/blog">Blog</g-link>
        <g-link class="border-solid border-4 border-white text-white text-center font-bold py-2 my-2 rounded hover:bg-white hover:text-gray-800" to="/newsletter">Newsletter</g-link>
        <g-link class="border-solid border-4 border-white text-white text-center font-bold py-2 my-2 rounded hover:bg-white hover:text-gray-800" to="/around">Find me on the Web</g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'I am a visionary!'
  }
}
</script>

<style>
/* .home-links a {
  margin-right: 1rem;
} */


</style>
