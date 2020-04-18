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

export default {
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
  beforeCreate() {
    console.log('before create index.vue')
  },
  created() {
    console.log('created index.ue')
  },
  beforeMount() {
    console.log('before mounted index.vue')
  },
  mounted() {
    console.log('mounted index.vue')
  },
  beforeUpdate() {
    console.log('before update index.vue')
  },
  updated() {
    console.log('updated index.cue')
  }

}
</script>

<style>

</style>