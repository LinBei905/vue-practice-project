<template>
  <div>
    <h1>Count:{{count}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementEven">even</button>
    <button @click="asyncIncrement">async</button>
  </div>
</template>

<script>
import {mapActions,mapMutations,mapState} from "vuex"
export default {
  // 使用map映射属性和方法
  methods: {
    ...mapActions(["incrementEven",'asyncIncrement']),
    ...mapMutations(["increment","decrement"])
  },
  computed:{
    ...mapState(["count"])
  }
};
</script>

<style scoped>
</style>