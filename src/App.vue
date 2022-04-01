<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @add="add"></Header>
      <List :missions="missions"></List>
      <Footer
        :all="missions.length"
        :done="missions.filter((item) => item.done).length"
        @clean="clean"
        @select="select"
      ></Footer>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  onMounted,
  onBeforeUnmount,
  watch,
} from "@vue/composition-api";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    const data = reactive({
      missions: [
        { id: 1, content: "吃饭", done: false },
        { id: 2, content: "睡觉", done: true },
        { id: 3, content: "打豆豆", done: false },
      ],
    });
    console.log(data);
    function add(mission) {
      data.missions.push(mission);
    }
    function select(flag) {
      const { missions } = data;
      missions.forEach((item) => (item.done = flag));
    }
    function clean() {
      let { missions } = data;
      data.missions = missions.filter((item) => !item.done);
    }
    watch(
      () => data.missions,
      (newVal) => {
        localStorage.setItem("MISSIONS_KEY", JSON.stringify(newVal));
      }
    );
    onMounted(() => {
      const missions = JSON.parse(localStorage.getItem("MISSIONS_KEY"));
      if (missions) data.missions.splice(0,missions.length, ...missions);
    });
    onBeforeUnmount(() => {
      localStorage.clear();
    });
    return {
      ...data,
      add,
      select,
      clean,
    };
  },
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