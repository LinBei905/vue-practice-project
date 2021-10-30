<template>
  <section class="jumbotron row">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="params"
        @keyup="enter"
        placeholder="enter the name you search"
      />
      <button
        :disabled="!params"
        @click="
          () => {
            $bus.$emit('search', params);
            params = '';
          }
        "
      >
        Search
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      params: "",
    };
  },
  methods: {
    enter($event) {
      const { keyCode } = $event;
      const { params } = this;
      if (keyCode === 13 && params.trim()) {
        this.params = "";
        this.$bus.$emit("search", params);
      }
    },
  },
};
</script>

<style scoped>
</style>