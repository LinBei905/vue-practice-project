<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="comment.name"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="comment.content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            :disabled="!(comment.name.trim() && comment.content.trim())"
            type="button"
            class="btn btn-default pull-right"
            @click="addComment"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    addComment() {
      const { comment } = this;
      // 调用自定义事件
      this.$emit("add", { id: Date.now(), ...comment });
      // $on和$emit方法都在Vue函数的显示原型上
      console.log({}.hasOwnProperty.call(this.__proto__.__proto__, "$on"))
      this.comment = { name: "", content: "" };
    }
  },
};
</script>

<style scoped>
</style>