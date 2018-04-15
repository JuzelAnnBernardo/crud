<template lang="pug">
  q-page(padding)

    // Modals
    q-modal(v-model="modal.create")
      q-card
        q-toolbar
          q-toolbar-title Create
          q-btn(icon="save" round small flat @click="onCreateUser")
        q-card-main
          q-input(v-model="newUser.name" stack-label="Name")

    q-modal(v-model="modal.edit")
      q-card(v-if="selectedUser")
        q-toolbar
          q-toolbar-title Edit
          q-btn(icon="save" round small flat @click="onUpdateUser")
        q-card-main
          q-input(v-model="selectedUser.name" stack-label="Name")

    q-modal(v-model="modal.remove")
      q-card(v-if="selectedUser")
        q-toolbar
          q-toolbar-title Delete
          q-btn(icon="delete" round small flat @click="onRemoveUser")
        q-card-main
          p Are you sure you gonna delete
          span.text-bold {{selectedUser.name}}
          span  with
          span.text-bold  id: {{selectedUser.id}}
    // List of Users
    q-card
      q-toolbar
        q-toolbar-title Users
        q-btn(icon="add" round small flat @click="addUser")
      q-card-main
        q-list(no-border)
          q-item(v-for="(user, index) of users", :key="index" multiline)
            q-item-main
              q-item-tile(label) {{user.name}}
            q-item-side(right)
              q-btn(icon="remove" round small flat color="negative" @click="removeUser(user)")
              q-btn(icon="edit" round small flat color="positive" @click="editUser(user)")
              q-btn(icon="info" round small flat color="info" @click="gotoUser(user)")

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageUsers",
  data() {
    return {
      modal: {
        create: false,
        edit: false,
        remove: false
      },
      newUser: {
        name: ""
      },
      selectedUser: null
    };
  },
  computed: {
    ...mapGetters(["users"])
  },
  methods: {
    ...mapActions(["createUser", "updateUser", "deleteUser", "getUsers"]),
    async onCreateUser() {
      await this.createUser(this.newUser);
      this.resetNewUser();
      this.modal.create = false;
    },
    async onUpdateUser() {
      await this.updateUser(this.selectedUser);
      this.resetNewUser();
      this.modal.edit = false;
    },
    async onRemoveUser() {
      await this.deleteUser(this.selectedUser);
      this.resetNewUser();
      this.modal.remove = false;
    },
    addUser() {
      this.resetNewUser();
      this.modal.create = true;
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.modal.edit = true;
    },
    removeUser(user) {
      this.selectedUser = { ...user };
      this.modal.remove = true;
    },
    resetNewUser() {
      this.newUser = {
        id: +new Date(),
        name: ""
      };
      this.selectedUser = null;
    },
    gotoUser(user) {
      this.$router.push({ name: "user", params: { id: user.id } });
    }
  },
  async mounted() {
    await this.getUsers();
  }
};
</script>
