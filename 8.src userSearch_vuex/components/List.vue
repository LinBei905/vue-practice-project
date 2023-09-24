<template>
  <div class="row">
    <div class="h1" v-show="infoState === 0">Enter Name To Search</div>
    <div class="h1" v-show="infoState === 1">Loading Results</div>
    <div class="h1" v-show="infoState === 2">Can't Find Users</div>
    <div class="h1" v-show="infoState === 3">Request Error</div>
    <Item v-for="user in users" :user="user" :key="user.id"></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState(["users","infoState"])
  },
  components: {
    Item,
  },
  mounted() {
  },
};
</script>

<style scoped>
</style>