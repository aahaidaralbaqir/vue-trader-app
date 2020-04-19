<template>
      <div class="row mt-4">
        <slot
          v-for="(stock) in stocks"
          :item="stock"
        >
        </slot>
      </div>
</template>

<script>
export default {
  props: ['stocks'],
}
</script>

<style>

</style>