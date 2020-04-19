<template>
  <div>
    <h1>Stock Page</h1>
      <StockBox :stocks="stocks">
        <StockItem slot-scope="row">
          <h3 slot="title">
            {{ row.item.name }} | Price: {{ row.item.price | toUsd }}
          </h3>
          <div slot="content">
            <StockAction  
              :stock="row.item"  
            />
          </div>
        </StockItem>
      </StockBox>
  </div>  
</template>

<script>


import StockBox from "./components/StockBox"
import StockItem from "./components/StockItem"
import StockAction from "./components/StockAction"

import Serializer from "../../mixins/serialize"

export default {
  mixins: [Serializer],
  data() {
    return {
      stocks : []
    }
  },
  components: {
    StockBox,
    StockItem,
    StockAction
  },
  filters: {
    toUsd(value) {
      return `$ ${value}`
    }
  },
  created() {

    this.stocks = this.$store.getters['stock/getStocks']
    this.eventHub.$on('buy-stock',
      data => 
        this.$store.dispatch('portfolio/buyStock',data
    ))
  }
}
</script>

<style>

</style>