<template>
  <div>
    <Header></Header>
    <div class="container">
      <!-- 传递参数给子组件 -->
      <Add :add="add"></Add>
      <List :comments="comments"></List>
    </div>
    <input type="text" ref="input" />
  </div>
</template>
<script>
import Add from './components/Add.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  data() {
    return {
      comments: [
        {
          id: 1,
          name: 'linbei',
          content: 'Hello Vue'
        },
        {
          id: 2,
          name: 'wanglei',
          content: 'Hello React'
        }
      ],
      test: 'test string'
    }
  },
  components: {
    Add,
    Header,
    List
  },
  methods: {
    add(comment) {
      this.comments.unshift(comment)
    }
  },
  created() {
    console.log(this.$refs.input)
  },
  beforeMount() {
    console.log(this.$refs.input)
  },
  mounted() {
    console.log(this.$refs.input)
  }
}
</script>

<style></style>
