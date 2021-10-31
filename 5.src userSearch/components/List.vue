<template>
  <div class="row">
    <div class="h1" v-show="state === 0">Enter Name To Search</div>
    <div class="h1" v-show="state === 1">Loading Results</div>
    <div class="h1" v-show="state === 2">Can't Find Users</div>
    <div class="h1" v-show="state === 3">Request Error</div>
    <Item v-for="user in users" :user="user" :key="user.id"></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      state: 0,
    };
  },
  components: {
    Item,
  },
  methods: {
    async getUsers(params) {
      this.state = 1;
      this.users=[]
      const result = await axios.get(
        `https://api.github.com/search/users?q=${params}`
      );
      const { items } = result;
      this.users = items;
      if (items.length === 0) this.state = 2;
      else this.state = 4;
    },
  },
  mounted() {
    this.$bus.$on("search",this.getUsers);
    axios.interceptors.response.use(
      (response) => {
        console.log(response);
        return response.data;
      },
      (error) => {
        this.state = 3;
        console.log("error:",error);
        return new Promise(() => {});
      }
    );
  },
};
</script>

<style scoped>
</style>