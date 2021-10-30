<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="content"
      @keyup="enter"
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    enter($event) {
      const { content } = this;
      const { keyCode } = $event;
      if (keyCode === 13 && content.trim()) {
        this.$emit("add", { id: Date.now(), content, done: false });
        this.content=""
      }
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 100%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin-bottom: 10px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>