<template>
  <Layout>
    <div class="mt-24 pb-24">
      <h1 class="font-black text-white text-4xl font-mono border-white border-b-4 mb-4">{{$page.post.title}}</h1>
      <p class="text-white font-mono font-semibold"> {{ $page.post.date}} · <span class="text-indigo-500 font-mono font-black">{{$page.post.timeToRead}} min read</span></p>
      <article class="markdown" v-html="$page.post.content" />
      <g-image
        src="~/assets/jimsig.png"
        class="invert h-14 w-32"
      />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
   post: post (path: $path) {
    id
    title
    content
    timeToRead
    date (format: "YYYY-MM-DD")
  }
}
</page-query>

<style scoped>
.markdown {
  @apply leading-relaxed text-lg text-white;
}

/* Headers */
.markdown >>> h1,
.markdown >>> h2 {
  @apply text-xl my-6 font-semibold underline;
}
.markdown >>> h3,
.markdown >>> h4,
.markdown >>> h5,
.markdown >>> h6 {
  @apply text-lg my-3 font-semibold;
}

@screen sm {
  .markdown >>> h1,
  .markdown >>> h2 {
    @apply text-2xl;
  }
  .markdown >>> h3,
  .markdown >>> h4,
  .markdown >>> h5,
  .markdown >>> h6 {
    @apply text-xl;
  }
}

/* Links */
.markdown >>> a {
  @apply text-indigo-600 font-bold no-underline;
}
.markdown >>> a:hover {
  @apply border-b-4 border-indigo-600 border-dashed no-underline;
  transition: all .5s;
}
/* Paragraph */
.markdown >>> p {
  @apply mb-4;
}
/* Lists */
.markdown >>> ul,
.markdown >>> ol {
  @apply mb-4 ml-8;
}
.markdown >>> li > p,
.markdown >>> li > ul,
.markdown >>> li > ol {
  @apply mb-0;
}
.markdown >>> ol {
  @apply list-decimal;
}
.markdown >>> ul {
  @apply list-disc;
}
/* Blockquotes */
.markdown >>> blockquote {
  @apply p-6 mx-6 mb-4 border-l-8 bg-white border-indigo-500 italic text-gray-800;
}
.markdown >>> blockquote > p {
  @apply mb-0;
}
/* Tables */
.markdown >>> td,
.markdown >>> th {
  @apply px-2 py-1 border border-gray-400;
}
.markdown >>> tr:nth-child(odd) {
  @apply bg-gray-100;
}
.markdown >>> table {
  @apply mb-6;
}

.markdown >>> code {
  @apply text-sm;
}

.invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

</style>