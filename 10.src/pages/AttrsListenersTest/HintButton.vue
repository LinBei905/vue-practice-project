<template>
    <div>
        <a :title="title">
            <!-- v-bind一次性添加$attrs里所有属性 -->
            <!-- v-on一次性添加$listeners里所有事件  -->
            <el-button v-bind="$attrs" v-on="$listeners" @click="$emit('event1')"></el-button>
        </a>
    </div>
</template>

<script>
    export default {
        props:['title'],
        mounted(){
            // $attrs会获取所有传给组件的属性，除了props已接受的属性和style、css
            // $listeners获取所有绑定的自定义事件
            console.log(this.$attrs,this.$listeners);
        }
    }
</script>

<style scoped>

</style>