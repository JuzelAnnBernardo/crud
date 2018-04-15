<template lang="pug">
  q-page
    h1 User {{id}}
    pre {{currentUser}}
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters(["user"]),
    currentUser() {
      return this.user(this.id);
    }
  }
};
</script>

<style>

</style>
