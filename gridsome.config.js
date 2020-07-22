// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ItsJamesMurray',
  plugins: [
    {
    use: "gridsome-plugin-tailwindcss",
    },
    {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'posts/**/*.md',
      route: '/blog/:slug',
      typeName: 'Post',
      remark: {
        plugins: [
          '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-KVR2T5G',
        enabled: true,
        debug: false
      }
    }
  ]
}
