<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <!-- 使用params和query新式传递参数 -->
      <router-link
        tag="li"
        v-for="m in msg"
        :key="m.id"
        class="list-group-item"
        :to="`/home/msg/detail/${m.id}?content=${m.name}`"
      >
      <!-- 路径的对象写法 -->
      <!-- :to="{name:'MsgDeatil',params:{id:m.id},query:{content:m.name}}" -->
        <a href="##">message{{ m.id }}</a>
      </router-link>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:"Message",
  data() {
    return {
      msg: [
        { id: 1, name: "message01" },
        { id: 2, name: "message02" },
        { id: 3, name: "message03" },
      ],
    };
  },
};
</script>

<style scoped>
.router-link-exact-active {
  text-decoration: none;
  background-color: #eee;
}
</style>