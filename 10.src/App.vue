<template>
  <div class="com">
    <h2>组件间通信高级(**非常重要, 面试必备**)</h2>
    <router-link to="/event">event深入</router-link>&nbsp;&nbsp;
    <router-link to="/model">v-model深入</router-link>&nbsp;&nbsp;
    <router-link to="/sync">属性修饰符sync</router-link>&nbsp;&nbsp;
    <router-link to="/attrs-listeners">$attrs与$listeners</router-link
    >&nbsp;&nbsp;
    <router-link to="/children-parent">$children与$parent</router-link
    >&nbsp;&nbsp;
    <router-link to="/scope-slot">作用域插槽scope-slot</router-link>&nbsp;&nbsp;
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.com {
  margin: 10px;
}
a {
  font-size: 16px;
  margin-right: 5px;
}
a.router-link-active {
  color: red;
}
</style>