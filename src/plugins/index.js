import VueRouter from "vue-router"
import routes from "../routes"

export default [
  VueRouter
]

// configure router
export const router = new VueRouter({
  mode: 'history',
  routes
})