<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-layout-header
      q-toolbar
        q-toolbar-title CRUD
        q-btn(@click="$router.push({ name: 'users' })" flat) Users
    q-page-container
      router-view

</template>

<script>
export default {
  name: "LayoutDefault"
};
</script>

<style>

</style>
