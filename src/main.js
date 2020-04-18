import Vue from 'vue'
import App from './App.vue'

import "./plugins"
// use library
import { router, store } from "./plugins"

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

