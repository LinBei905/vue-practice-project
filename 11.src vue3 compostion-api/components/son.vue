<template>
  <div>
      son component
  </div>
</template>

<script>
import { inject } from "@vue/composition-api";

export default {
  name: "Son",
  setup(){
    const data = inject('data')
    console.log(data);
  }
};
</script>

<style lang="scss" scoped>
</style>