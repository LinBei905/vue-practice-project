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
            search(params);
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      params: "",
    };
  },
  methods: {
    ...mapActions(["search"]),
    enter($event) {
      const { keyCode } = $event;
      const { params } = this;
      if (keyCode === 13 && params.trim()) {
        this.params = "";
        this.search(params);
      }
    },
  },
};
</script>

<style scoped>
</style>