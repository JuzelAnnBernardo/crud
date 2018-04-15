<template lang="pug">
  q-page
    h1 User {{id}}
    pre {{user}}
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters(["users"]),
    user() {
      return this.users.find(user => user.id === this.id);
    }
  },
  watch: {
    $route: {
      handler: "getUsers",
      immediate: true
    }
  },
  methods: {
    ...mapActions(["getUsers"])
  }
};
</script>

<style>

</style>
