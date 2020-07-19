<template>
  <Layout>
    <div class="w-full h-full flex flex-col justify-center">
      <h1 class="text-center text-4xl font-black font-mono text-white mb-16">Around the web</h1>
      <ul v-for="(sub, ix) in sub" :key="ix">
        <li class="font-mono font-semibold">
          <span class="text-white">{{ sub.label }}:</span>
          <a :href="sub.url" class="text-indigo-600 no-underline myUnderline ml-4">{{ sub.text }}</a>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Find me online'
  },
  data() {
    return {
      sub: [
        {
          label: 'Email',
          text: 'James@itsjamesmurray.com',
          url: 'mailto:james@itsjamesmurray.com'
        },
        {
          label: 'Twitter',
          text: 'ItsJamesMurray',
          url: 'https://www.twitter.com/itsjamesmurray'
        },
        {
          label: 'GitHub',
          text: 'ItsJamesMurray',
          url: 'https://www.github.com/itsjamesmurray'
        }
      ]
    }
  }
}
</script>

<style scoped>
.myUnderline:hover {
  @apply border-b-4 border-indigo-600 border-dashed no-underline;
  transition: all .5s;
}
</style>
