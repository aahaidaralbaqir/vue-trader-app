<template>
  <div>
    <h1>My Portfolio</h1>
      <PortfolioBox :stocks="stocks">
        <PortfolioItem slot-scope="row">
          <h3 slot="title">
            {{ row.item.name }} | Price: {{ row.item.price | toUsd }} | Quantity: {{ row.item.quantity }}
          </h3>
          <div slot="content">
            <PortfolioAction
              :stock="row.item"  
            />
          </div>
        </PortfolioItem>
      </PortfolioBox>
  </div>  
</template>

<script>

import PortfolioBox from "./components/PortfolioBox"
import PortfolioItem from "./components/PortfolioItem"
import PortfolioAction from "./components/PortfolioAction"

export default {
  data() {
    return {
      stocks : []
    }
  },
  components: {
    PortfolioBox,
    PortfolioItem,
    PortfolioAction
  },
  filters: {
    toUsd(value) {
      return `$ ${value}`
    }
  },
  created() {
    this.stocks = this.$store.getters['portfolio/stocks']
  }
}
</script>

<style>

</style>