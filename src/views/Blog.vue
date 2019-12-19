<template>
<div class="py-24">
  <div v-if="specificPost" class="px-12 sm:w-1/2 sm:p-0 flex-col m-auto">
    <h1 class="text-4xl mt-8 font-black">{{post.fields.Title}}</h1>
    <hr class=w-full>
    <span>James Murray - {{moment(post.fields['Publish Date']).format('MMMM Do YYYY')}}</span>
    <br>
    <div class = "post" v-html="markedPost"> {{ markedPost }} </div>
    <br>
    <br>
    <img
      src="@/assets/img/jimsig.png"
      style="height:4rem"
      :class="darkMode ? 'invert': ''"
    />
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
import moment from 'moment'
import Prism from 'prismjs';
import marked from 'marked'
import BlogRoll from '@/components/BlogRoll/BlogRoll'

export default {
  name: 'blog',
  components: {
    BlogRoll
   },
  data () {
    return {
      moment: moment,
      marked: marked,
      Prism: Prism
      }
  },
  created () {
    if(Object.keys(this.$store.state.blogPosts.selectedPost === 0)) {
      this.$store.dispatch('fetchPost', this.$route.params.post)
    }
  },
  computed: {
    specificPost () {
      if(this.$route.params.post) {
        return true
      } else {
        return false
      }
    },
    post () {
      return this.$store.state.blogPosts.selectedPost
    },
    posts () {
      return this.$store.state.blogPosts.blogPosts
    },
    darkMode () {
      return this.$store.state.darkMode.darkMode
    },
    markedPost () {
      return marked(this.$store.state.blogPosts.selectedPost.fields.Content)
    }
  }
}
</script>

<style>
.invert {-webkit-filter: invert(100%);filter: invert(100%);}

.post {
  line-height: 2;
}

.post img {
  display:block;
  margin-left: auto;
  margin-right: auto;
}

.post a {
  background-color: #bee3f8;
  text-decoration: underline;
  color: #4299e1;
  font-weight: bold;
  padding: .05rem;
  border-radius: .15rem;
  padding-left: .25rem;
  padding-right: .25rem;
}

.post a:hover {
  box-shadow: 0 0 .75rem #edf2f7;
  color: #edf2f7;
}

.post h1 {
  font-weight: 900 !important;
  font-size: 1.875rem !important;
  margin-top: 1.5rem !important;
}

.post h2 {
  font-size: 1.875rem !important;
  margin-top: 1.75rem !important;
}

.post h3 {
  font-weight: 900 !important;
  font-size: 1.5rem !important;
  margin-top: 1.75rem !important;
}

.post h4 {
  font-size: 1.5rem !important;
  margin-top: 1.75rem !important;
}

.post h5 {
  font-weight: 900 !important;
  font-size: 1.25rem !important;
  margin-top: 1.75rem !important;
}

.post h6 {
  font-size: 1.25rem !important;
  margin-top: 1.75rem !important;
}

.post pre {
  background-color: #1a202c !important;
  width: 100% !important;
  border-radius: .25rem;
  padding: 1rem;
  border: .05rem solid #ecc94b;
  border-left: 1rem solid #ecc94b;
  box-shadow: 0 0 .75rem #ecc94b;
  white-space: pre-wrap !important;
}

.post code {
  background-color: #1a202c !important;
  padding: .15rem;
  color:#ebf4ff;;
  width: 100% !important;
  white-space: pre-wrap !important;
}


.post ul  {
  margin-left: 2rem;
  list-style-type: circle !important;
}

.post ol {
  margin-left: 2rem;
  list-style-type: decimal !important;
}

.post blockquote {
  background: #fefcbf;
  border-left: 1rem solid #ecc94b;
  margin: 1.5rem;
  padding: 1rem;
}
.post blockquote:before {
  color: #ecc94b;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
.post blockquote p {
  display: inline;
  color: #4a5568 !important;
  font-weight: 700 !important;
}

.post p, .post div, .post span, .post pre, .post table, .post blockquote{
  margin-top: .5rem;
}

</style>
