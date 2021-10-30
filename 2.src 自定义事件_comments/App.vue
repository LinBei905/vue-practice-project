<template>
  <div>
    <Header></Header>
    <div class="container">
      <!-- 复杂写法 -->
      <!-- <Add ref="Add"></Add> -->
      <!-- 简单写法 -->
      <Add @add="add"></Add>
      <List :comments="comments"></List>
    </div>
  </div>
</template>
<script>
import Add from "./components/Add.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "linbei",
          content: "Hello Vue",
        },
        {
          id: 2,
          name: "wanglei",
          content: "Hello React",
        },
      ],
    };
  },
  components: {
    Add,
    Header,
    List,
  },
  methods: {
    add(comment) {
      this.comments.unshift(comment);
    }
  },
  mounted(){
    // <!-- 复杂写法 -->
    // 添加自定义事件
    // this.$refs.Add.$on("add",this.add)
  }
};
</script>

<style>
</style>
