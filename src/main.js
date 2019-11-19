import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './state/store'

Vue.config.productionTip = false

import '@/assets/styles/tailwind.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
