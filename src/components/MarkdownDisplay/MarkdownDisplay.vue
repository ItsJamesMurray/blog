<template>
    <div v-html="processedMarkdown"></div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/nord.css'

export default {
  computed: {
    processedMarkdown() {
      return marked(this.markdown, {
        highlight(md) {
          return highlight.highlightAuto(md).value
        }
      })
    }
  },
  props: ['markdown']
}
</script>

<style scoped>
  ::v-deep p {
    margin: 1em 0;
  }

  ::v-deep a {
    text-decoration: underline;
    color: #4299e1;
    font-weight: bold;
    padding: .05rem;
    border-radius: .15rem;
    padding-left: .25rem;
    padding-right: .25rem;
  }
  ::v-deep a:hover {
    background-color: #ebf8ff;
  }
  ::v-deep h1, ::v-deep h2, ::v-deep h3, ::v-deep h4, ::v-deep h5, ::v-deep h6 {
    font-weight: 700;
    line-height: 1.7;
    cursor: text;
    margin: 1em 0 15px;
    padding: 0;
  }
  ::v-deep h1 {
    font-size: 2.5em;
    border-bottom: 1px solid #ddd;
  }
  ::v-deep h2 {
    font-size: 2em;
    border-bottom: 1px solid #eee;
  }
  ::v-deep h3 {
    font-size: 1.5em;
  }
  ::v-deep h4 {
    font-size: 1.2em;
  }
  ::v-deep h5 {
    font-size: 1em;
  }
  ::v-deep h6 {
    color: #777;
    font-size: 1em;
  }
  ::v-deep p, ::v-deep blockquote, ::v-deep table, ::v-deep pre {
    margin: 15px 0;
  }
  ::v-deep ul {
    padding-left: 30px;
    list-style-type: disc;
  }
  ::v-deep ol {
    padding-left: 30px;
    list-style-type: decimal;
  }
  ::v-deep ol ::v-deep li ::v-deep ul:first-of-type {
    margin-top: 0px;
  }
  ::v-deep hr {
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;
    border: 0 none;
    color: #ccc;
    height: 4px;
    margin: 15px 0;
    padding: 0;
  }
  ::v-deep a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }
  ::v-deep h1 + p, ::v-deep h2 + p, ::v-deep h3 + p, ::v-deep h4 + p, ::v-deep h5 + p, ::v-deep h6 + p, ::v-deep ul li > :first-child, ::v-deep ol li > :first-child {
    margin-top: 0;
  }
  ::v-deep dl {
    padding: 0;
  }
  ::v-deep dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }
  ::v-deep dl dt:first-child {
    padding: 0;
  }
  ::v-deep dl dt > :first-child {
    margin-top: 0;
  }
  ::v-deep dl dt > :last-child {
    margin-bottom: 0;
  }
  ::v-deep dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }
  dl dd > :first-child {
    margin-top: 0;
  }
  dl dd > :last-child {
    margin-bottom: 0;
  }
  ::v-deep blockquote {
    border-left: 4px solid #ecc94b;
    padding: 0 15px;
  }
  ::v-deep blockquote > :first-child {
    margin-top: 0;
  }
  ::v-deep blockquote > :last-child {
    margin-bottom: 0;
  }
  ::v-deep table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 100%;
    font: inherit;
  }
  ::v-deep table th {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 6px 13px;
  }
  ::v-deep table td {
    border: 1px solid #ccc;
    padding: 6px 13px;
  }
  ::v-deep table tr {
    border-top: 1px solid #ccc;
    background-color: #fff;
  }
  ::v-deep table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  ::v-deep img {
    max-width: 100%;
  }
  ::v-deep code, ::v-deep tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    /* border: 1px solid #eaeaea; */
    /* background-color: #f8f8f8; */
    /* border-radius: 3px; */
    font-family: Courier, monospace;
    font-size: 12px;
    /* color: #333333; */
  }
  ::v-deep pre > code {
    margin: 0;
    padding: 0;
    white-space: pre;
    /* border: none; */
    /* background: transparent; */
  }
  ::v-deep pre {
    /* background-color: #f8f8f8; */
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    /* border-radius: 3px; */
    margin: 26px 0;
  }
  /* ::v-deep pre code, ::v-deep pre tt {
    background-color: transparent;
    border: none;
  } */
  ::v-deep sub {
    vertical-align: sub;
    top: -1px;
  }
</style>