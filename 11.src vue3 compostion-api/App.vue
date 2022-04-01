<template>
  <div>
    Vue component
    <Child />
  </div>
</template>
<script>
import { provide, defineAsyncComponent } from "@vue/composition-api";
const Child = defineAsyncComponent(()=>import('@/components/child.vue'))
export default {
  name: "App",
  components:{
    Child
  },
  setup() {
    const data = {
      name:'linbei',
      age:18
    }
    provide('data', data)
  },
};
</script>

<style>
</style>
