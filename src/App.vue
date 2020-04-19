<template>
  <Layout>
    <Header 
      slot="header"
      title="Stock Trader App" 
      :menus="menus"
    />
    <router-view slot="container"></router-view>
  </Layout>
</template>

<script>

import {
  Layout,
  Header
} from "./components/design"
import { menus } from "./mock"

export default {
  data() {
    return {
      menus: [
        ...menus
      ]
    }
  },
  components: {
    Layout,
    Header
  },
  created() {
    this.$store.dispatch('stock/setStocks')
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
