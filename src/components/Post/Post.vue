<template>
<div class="py-24">
  <div v-if=loading>
    <Loading />
  </div>
  <div v-else-if="typeof postTitle != undefined" class="px-12 w-full sm:w-1/2 sm:p-0 flex-col m-auto">
    <h1 class="text-4xl mt-8 font-black">{{ postTitle }}</h1>
    <span>James Murray - {{ dateOfPublish }}</span><br>
    <MarkdownDisplay :markdown="content" />
    <img
      src="@/assets/img/jimsig.png"
      style="height:4rem"
      :class="darkMode ? 'invert': ''"
    />
  </div>
</div>
</template>

<script>
import moment from 'moment'
import Loading from '@/components/Loading/Loading'
import store from '@/state/store'
import MarkdownDisplay from '@/components/MarkdownDisplay/MarkdownDisplay'

export default {
  name: 'post',
  components: {
    Loading,
    MarkdownDisplay
   },
  data () {
    return {
      moment: moment,
      meta: {
        title: store.state.blogPosts.selectedPost.fields.Title,
        description: store.state.blogPosts.selectedPost.fields.Description,
        slug: store.state.blogPosts.selectedPost.fields['URL Slug']
        }
    }
  },
  metaInfo() {
    const meta = this.meta
    return {
      title: meta ? `${meta.title} by James Murray` : 'I am a visionary - ItsJamesMurray',
      titleTemplate: null,
      meta: [
        // Open Graph / Facebook
        { vmid: 'og:title', property: 'og:title', content: meta ? `${ meta.title } by James Murray` : 'I am a visionary - ItsJamesMurray' },
        { vmid: 'og:type', property: 'og:type', content: 'article' },
        { vmid: 'og:url', property: 'og:url', content: meta ? `https://www.itsjamesmurray.com/blog/${ meta.slug }` : 'https://www.itsjamesmurray.com/blog' },
        { vmid: 'og:description', property: 'og:description', content: meta ? meta.description : 'I wrote a thing!' },
        { vmid: 'og:image', property: 'og:image', content: 'https://www.itsjamesmurray.com/img/visionary.png' },
        // Twitter
        { vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
        { vmid: 'twitter:url', property: 'twitter:url', content: meta ? `https://www.itsjamesmurray.com/blog/${ meta.slug }` : 'https://www.itsjamesmurray.com/blog' },
        { vmid: 'twitter:title', property: 'twitter:title', content: meta ? `${ meta.title } by James Murray` : 'I am a visionary - ItsJamesMurray' },
        { vmid: 'twitter:description', property: 'twitter:description', content: meta ? meta.description : 'I wrote a thing!' },
        { vmid: 'twitter:image', property: 'twitter:image', content: 'https://www.itsjamesmurray.com/img/visionary.png' }
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchPost',to.params.post).then(() => {
      next()
    }).catch(() => {
      next({name:'NonFound'})
    })
  },
  created () {
    if(store.state.blogPosts.selectedPost === undefined) {
      this.$router.push(`/404`)
    }
  },
  computed: {
    dateOfPublish () {
      return moment(store.state.blogPosts.selectedPost.fields['Publish Date']).format('MMMM Do YYYY')
    },
    postTitle () {
      return store.state.blogPosts.selectedPost.fields.Title
    },
    darkMode () {
      return store.state.darkMode.darkMode
    },
    // markedPost () {
    //   return marked(store.state.blogPosts.selectedPost.fields.Content)
    // },
    loading () {
      return store.state.blogPosts.loading
    },
    content () {
      return store.state.blogPosts.selectedPost.fields.Content
    }
  }
}
</script>

<style>
  .invert {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }

</style>
