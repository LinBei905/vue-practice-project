<template>
    <div>
        <h2>Slot</h2>
        <!-- 默认插槽 -->
        <slot>
            <!-- 默认值 -->
            <h3>默认插槽默认值</h3>
        </slot>
        <slot name="x">
            <!-- 具名插槽 -->
            <h3>x:具名插槽默认值</h3>
        </slot>
        <slot name="y">
            <!-- 具名插槽 -->
            <h3>y:具名插槽默认值</h3>
        </slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>