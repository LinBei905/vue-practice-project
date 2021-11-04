<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col class="center" :span="12"><el-button round @click="go('/router')">router</el-button></el-col>
          <el-col class="center" :span="12"><el-button round @click="go('/search')">search</el-button></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    go(params){
      window.location.pathname=params
    }
  }
};
</script>

<style scoped>
.center{
  text-align: center;
}
</style>