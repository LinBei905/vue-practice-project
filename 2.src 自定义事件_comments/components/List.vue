<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Comment ref="Comment" v-for="(comment,index) in comments" :key="comment.id" :comment="comment" :index="index" @del="del"/>
    </ul>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
  props:[
    "comments"
  ],
  components: {
    Comment,
  },
  methods:{
    del(index){
      this.comments.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>