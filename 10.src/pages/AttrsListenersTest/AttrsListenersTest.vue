<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <HintButton type="primary" icon="el-icon-edit" title="edit" @event1="test"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "./HintButton.vue";
export default {
  name: "AttrsListenersTest",
  components: {
    HintButton,
  },
  methods: {
    test(){
      console.log("event1: test");
    }
  },
};
</script>
