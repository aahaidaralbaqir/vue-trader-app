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
      @click.prevent="buyStock"
    >
    Buy
    </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  methods: {
    buyStock() {

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