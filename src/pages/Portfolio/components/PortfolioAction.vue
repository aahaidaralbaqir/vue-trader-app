<template>
  <div class="form-inline">
    <input 
      type="number" 
      class="form-control"
      v-model="quantity"
    >
    <button 
      class="btn btn-success"
      :disabled="quantity | notNegatif"
      @click.prevent="sellStock"
    >
    Sell
    </button>
  </div>
</template>

<script>

import {
  Serializer
} from "../../../mixins"

export default {
  mixins: [Serializer],
  props: ['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
    sellStock() {
        // const data = this.serialize(this.stock,this.quantity)
        
    }
  },
  filters: {
    notNegatif(value) {
      return value <= 0
    }
  }
}
</script>

<style>

</style>