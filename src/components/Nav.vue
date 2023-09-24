<template>
  <ul class="nav nav-stacked col-md-6" role="tablist">
    <router-link tag="li" role="presentation" active-class="active" to="/home">
      <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a>
    </router-link>
    <router-link tag="li" role="presentation" active-class="active" to="/about">
      <a href="#About" aria-controls="About" role="tab" data-toggle="tab"
        >About</a
      >
    </router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active {
  text-decoration: none;
  background-color: #eee;
}
</style>