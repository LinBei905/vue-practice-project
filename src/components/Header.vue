<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="content"
      @keyup.enter="addMission"
      placeholder="请输入你的任务名称,按回车键确认"
    />
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup(_, context) {
    const content = ref("");
    function addMission() {
      if (content.value.trim()) {
        context.emit("add", {
          id: Date.now(),
          content: content.value,
          done: false,
        });
        content.value = "";
      }
    }
    return {
      content,
      addMission,
    };
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