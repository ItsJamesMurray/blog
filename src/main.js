import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './state/store'
import '@/assets/styles/tailwind.css'
import ViewDefault from './views/ViewDefault.vue'

Vue.config.productionTip = false
Vue.component('ViewDefault', ViewDefault)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
