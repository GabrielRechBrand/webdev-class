<template>
  <div v-for="expression in history" :key="expression">{{expression}}
  </div>
</template>

<script>
export default {
  name: "HistoryComponent",
  props: {
    history: []
  }
}
</script>

<style scoped>

</style>