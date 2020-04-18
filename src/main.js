import Vue from 'vue'
import App from './App.vue'

// use library
import libraries, { router } from "./plugins"
import {  withPlugin } from "./utils"

Vue.config.productionTip = false

withPlugin(Vue,libraries)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

