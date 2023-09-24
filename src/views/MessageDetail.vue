<template>
  <ul class="list-group">
    <li class="list-group-item">{{content}}:message{{id}}</li>
    <li class="list-group-item">{{content}}:message{{id}}</li>
    <li class="list-group-item">{{content}}:message{{id}}</li>
    <li class="list-group-item">{{content}}:message{{id}}</li>
  </ul>
</template>

<script>
export default {
    props:["id","content"],
    // 三个链接使用的时同一个组件，mounted只会执行一次，切换时只是重新传递数据，不会销毁
    mounted(){
      console.log("MessageDetail");
    }
};
</script>

<style scoped>
</style>