<template>
  <div role="tabpanel" class="tab-pane active" id="News">
    <ul class="list-group">
      <li v-for="n in news" :key="n.id" class="list-group-item">
        {{ n.name }}
        <!-- 编程式路由导航:对象形式 -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="$router.push({ name: 'NewsDeatil', params: { id: n.id } })"
        >
          {{ n.id }}
        </button>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        { id: 1, name: "news01" },
        { id: 2, name: "news02" },
        { id: 3, name: "news03" },
      ],
    };
  },
};
</script>

<style scoped>
.list-group-item {
  position: relative;
}

.btn {
  width: 80px;
  height: 30px;
  position: absolute;
  right: 0;
  bottom: 5px;
}
</style>