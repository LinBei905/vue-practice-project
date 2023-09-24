<template>
  <div role="tabpanel" class="tab-pane active" id="home">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <!-- 路由组件在点击时创建，切换时销毁 -->
      <router-link tag="li" role="presentation" active-class="active" to="/home/msg">
        <a href="#Message" aria-controls="Message" role="tab" data-toggle="tab"
          >Message</a
        >
      </router-link>
      <router-link tag="li" role="presentation" active-class="active" to="/home/news">
        <a href="#News" aria-controls="News" role="tab" data-toggle="tab"
          >News</a
        >
      </router-link>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- 缓存指定名称的组件（组件中设置的name属性） -->
      <keep-alive include="Message">
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
