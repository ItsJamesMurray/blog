import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './state/store'
import Prism from 'prismjs';
import '@/assets/styles/tailwind.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  Prism,
  render: h => h(App)
}).$mount('#app')
