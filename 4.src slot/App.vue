<template>
  <div>
    <Slot>
      <!-- 使用插槽,没有用template标签包裹默认包含在默认插槽中 -->
      <template>
        <h3>default</h3>
      </template>
      <template slot="x">
        <h3>使用具名插槽</h3>
      </template>
    </Slot>
    <ScopedSlot :list="list">
      <!-- 作用域插槽 -->
      <template slot-scope="{ item }">
        <!-- 符合对应条件时，子组件中的显示由父组件决定 -->
        <span v-if="item.done" style="color:tomato">{{item.content}} √</span>
      </template>
    </ScopedSlot>
  </div>
</template>

<script>
import Slot from "./components/Slot.vue";
import ScopedSlot from "./components/ScopedSlot.vue";
export default {
  data() {
    return {
      list: [
        { id: 1, content: "aaa", done: true },
        { id: 2, content: "bbb", done: false },
        { id: 3, content: "ccc", done: true },
      ],
    };
  },
  components: {
    Slot,
    ScopedSlot,
  },
};
</script>

<style scoped>
</style>