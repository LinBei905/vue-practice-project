<template>
  <div class="container">
    <Header></Header>
    <div class="row">
      <Nav></Nav>
      <div class="tab-content col-md-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
export default {
  components: {
    Header,
    Nav,
  },
};
</script>

<style scoped>
</style>
