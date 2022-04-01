<template>
  <div>
    child component
    <Son />
  </div>
</template>

<script>
import Son from "@/components/son.vue";

export default {
  name: "Child",
  components: {
    Son,
  },
};
</script>

<style lang="scss" scoped>
</style>