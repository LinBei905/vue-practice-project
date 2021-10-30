<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @add="add"></Header>
      <List :missions="missions"></List>
      <Footer
        :all="missions.length"
        :done="missions.filter((item) => item.done).length"
        @clean="clean"
      ></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      missions: [
        { id: 1, content: "吃饭", done: false },
        { id: 2, content: "睡觉", done: true },
        { id: 3, content: "打豆豆", done: false },
      ],
    };
  },
  components: {
    Header,
    List,
    Footer,
  },
  methods: {
    add(mission) {
      this.missions.push(mission);
    },
    select(flag) {
      const { missions } = this;
      missions.forEach((item) => (item.done = flag));
    },
    clean() {
      let { missions } = this;
      this.missions = missions.filter((item) => !item.done);
    },
  },
  watch: {
    missions: {
      // 可监测到数组内部元素对象的变化
      deep: true,
      handler(newVal) {
        localStorage.setItem("MISSIONS_KEY", JSON.stringify(newVal));
      },
    },
  },
  mounted() {
    const missions = JSON.parse(localStorage.getItem("MISSIONS_KEY"));
    if (missions) this.missions = missions;
    // 在$bus上绑定事件
    console.log(this);
    this.$bus.$on("select",this.select)
  },
  beforeDestroy() {
    localStorage.clear();
  }
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>