<template>
  <ul>
    <h2>作用域插槽</h2>
    <li v-for="item in list" :key="item.id">
      <slot :item="item">{{item.content}}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style scoped>
</style>