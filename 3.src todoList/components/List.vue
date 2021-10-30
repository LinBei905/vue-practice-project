<template>
  <ul class="todo-main">
      <Item v-for="(item, index) in missions" :key="item.id" :mission="item" :index="index" @change="change" @del="del"></Item>
  </ul>
</template>

<script>
import Item from "./Item.vue"
export default {
    props:["missions"],
    components:{
        Item
    },
    methods: {
        change(index){
            const {missions}=this;
            missions[index].done = !missions[index].done
        },
        del(index){
            const {missions}=this;
            missions.splice(index,1);
        }
    }
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>