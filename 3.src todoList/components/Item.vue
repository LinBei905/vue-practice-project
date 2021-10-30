<template>
  <li >
    <label>
      <input type="checkbox" :checked="mission.done" @click="$emit('change',index)"/>
      <span>{{mission.content}}</span>
    </label>
    <button class="btn btn-danger" @click="$emit('del',index)">删除</button>
  </li>
</template>

<script>
export default {
    props:["mission","index"]

};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li:hover{
    background:rgb(199, 199, 199);
}
li:hover button {
    display: block;
}
li label {
  cursor: pointer;
}

li label input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>