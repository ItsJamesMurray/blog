<template>
<div class="py-24">
  <div v-if=loading>
    <Loading />
  </div>
  <div v-else-if="typeof post != undefined" class="px-12 sm:w-1/2 sm:p-0 flex-col m-auto">
    <h1 class="text-4xl mt-8 font-black">{{post.fields.Title}}</h1>
    <hr class=w-full>
    <span>James Murray - {{moment(post.fields['Publish Date']).format('MMMM Do YYYY')}}</span><br>
    <div class = "post" v-html="markedPost"> {{ markedPost }} </div><br><br>
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
import marked from 'marked'
import Loading from '@/components/Loading/Loading'

export default {
  name: 'blog',
  components: {
    Loading
   },
  data () {
    return {
      moment: moment,
      marked: marked
      }
  },
  // metaInfo() {
  //   return {
  //     title: `${this.post.fields.Title} by James Murray`,
  //     meta: [
  //       {
  //         name: 'description',
  //         content: this.post.fields.Description
  //       }
  //     ]
  //   }
  // },
  created () {
    if(Object.keys(this.$store.state.blogPosts.selectedPost === 0)) {
      this.$store.dispatch('fetchPost', this.$route.params.post)
    }
  },
  computed: {
    post () {
      return this.$store.state.blogPosts.selectedPost
    },
    darkMode () {
      return this.$store.state.darkMode.darkMode
    },
    markedPost () {
      return marked(this.$store.state.blogPosts.selectedPost.fields.Content)
    },
    loading () {
      return this.$store.state.blogPosts.loading
    }
  }
}
</script>

<style>
  .invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
  }
  .post p {
    margin: 1em 0;
  }

  .post a {
    text-decoration: underline;
    color: #4299e1;
    font-weight: bold;
    padding: .05rem;
    border-radius: .15rem;
    padding-left: .25rem;
    padding-right: .25rem;
  }
  .post a:hover {
    background-color: #ebf8ff;
  }
  .post h1, .post h2, .post h3, .post h4, .post h5, .post h6 {
    font-weight: 700;
    line-height: 1.7;
    cursor: text;
    margin: 1em 0 15px;
    padding: 0;
  }
  .post h1 {
    font-size: 2.5em;
    border-bottom: 1px solid #ddd;
  }
  .post h2 {
    font-size: 2em;
    border-bottom: 1px solid #eee;
  }
  .post h3 {
    font-size: 1.5em;
  }
  .post h4 {
    font-size: 1.2em;
  }
  .post h5 {
    font-size: 1em;
  }
  .post h6 {
    color: #777;
    font-size: 1em;
  }
  .post p, .post blockquote, .post table, .post pre {
    margin: 15px 0;
  }
  .post ul {
    padding-left: 30px;
    list-style-type: circle;
  }
  .post ol {
    padding-left: 30px;
    list-style-type: decimal;
  }
  .post ol .post li .post ul:first-of-type {
    margin-top: 0px;
  }
  .post hr {
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;
    border: 0 none;
    color: #ccc;
    height: 4px;
    margin: 15px 0;
    padding: 0;
  }
  .post a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }
  .post h1 + p, .post h2 + p, .post h3 + p, .post h4 + p, .post h5 + p, .post h6 + p, .post ul li > :first-child, .post ol li > :first-child {
    margin-top: 0;
  }
  .post dl {
    padding: 0;
  }
  .post dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }
  .post dl dt:first-child {
    padding: 0;
  }
  .post dl dt > :first-child {
    margin-top: 0;
  }
  .post dl dt > :last-child {
    margin-bottom: 0;
  }
  .post dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }
  dl dd > :first-child {
    margin-top: 0;
  }
  dl dd > :last-child {
    margin-bottom: 0;
  }
  .post blockquote {
    border-left: 4px solid #ecc94b;
    padding: 0 15px;
  }
  .post blockquote > :first-child {
    margin-top: 0;
  }
  .post blockquote > :last-child {
    margin-bottom: 0;
  }
  .post table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 100%;
    font: inherit;
  }
  .post table th {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 6px 13px;
  }
  .post table td {
    border: 1px solid #ccc;
    padding: 6px 13px;
  }
  .post table tr {
    border-top: 1px solid #ccc;
    background-color: #fff;
  }
  .post table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  .post img {
    max-width: 100%;
  }
  .post code, .post tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
    font-family: Courier, monospace;
    font-size: 12px;
    color: #333333;
  }
  .post pre > code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }
  .post pre {
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
    margin: 26px 0;
  }
  pre code, pre tt {
    background-color: transparent;
    border: none;
  }
  .post sub {
    vertical-align: sub;
    top: -1px;
  }
</style>
