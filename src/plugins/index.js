import VueRouter from "vue-router"
import Vuex from "vuex"
import Vue from "vue"

import routes from "../routes"
import { stock,portfolio } from "../store"

Vue.use(VueRouter)
Vue.use(Vuex)

// configure router
export const router = new VueRouter({
  mode: 'history',
  routes
})

export const store = new Vuex.Store({
  modules: {
    stock,
    portfolio
  }
});