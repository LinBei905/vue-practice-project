<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        @click="choose"
        :checked="all === done && all !== 0"
        ref="checkbox"
      />
    </label>
    <span>
      <span>已完成{{ done }}</span> / 全部{{ all }}
    </span>
    <button class="btn btn-danger" @click="$emit('clean')">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: ["all", "done"],
  setup(_, context) {
    function choose() {
      const { checkbox:{ checked } } = context.refs;
      context.emit("select", checked);
    }
    return {
      choose
    }
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>