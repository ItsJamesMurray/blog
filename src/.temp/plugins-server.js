import plugin_gridsome_plugin_tailwindcss_5 from "/Users/jamesmurray/github/ItsJamesMurray/blog/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_gtm_7 from "/Users/jamesmurray/github/ItsJamesMurray/blog/node_modules/gridsome-plugin-gtm/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_gridsome_plugin_gtm_7,
    options: {"id":"GTM-KVR2T5G","enabled":true,"debug":false}
  }
]
