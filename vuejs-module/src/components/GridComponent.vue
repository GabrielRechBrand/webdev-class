<template>
  <div class="container">
    <div class="row">
      <div v-for="column in columns" :key="column.id" class="col-auto">
        {{column.label}}
      </div>
    </div>
    <div v-for="item in list" :key="item.id" class="row">
      <div v-for="(value, key) in item" :key="key" class="col-auto">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridComponent",
  props: {
    columns: [],
    list: []
  }
}
</script>

<style scoped>

</style>