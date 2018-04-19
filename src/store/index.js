import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// Function
const state = function() {
  return {
    users: []
  };
};

const getters = {
  users: state => state.users,
  user: (state, getters) => id => getters.users.find(user => user.id === id)
};

const mutations = {
  SET_USERS: (state, users) => {
    state.users = users;
  },
  CREATE_USER: (state, user) => {
    state.users.push(user);
  },
  UPDATE_USER: (state, { index, user }) => {
    state.users.splice(index, 1, user);
  },
  DELETE_USER: (state, index) => {
    state.users.splice(index, 1);
  }
};

const actions = {
  async getUserIndex({ getters }, selectedUser) {
    // const { id } = selectedUser;
    const getUserIndexById = user => {
      console.log(user);
      console.log(
        "PAREHAS BA NG ID",
        user.id,
        selectedUser.id,
        user.id === selectedUser.id
      );
      return user.id === selectedUser.id;
    };
    const index = getters.users.findIndex(getUserIndexById);

    console.log("ETO INDEX KO", index, "ETO ID KO", selectedUser.id);
    return index;
  },
  async getUsers({ commit }) {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    // const response = await axios("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    // const data = response.data
    commit("SET_USERS", data);
  },
  async createUser({ commit }, user) {
    commit("CREATE_USER", user);
  },
  async updateUser({ commit, dispatch }, selectedUser) {
    const index = await dispatch("getUserIndex", selectedUser);
    commit("UPDATE_USER", {
      index,
      user: selectedUser
    });
  },
  async deleteUser({ commit, dispatch }, selectedUser) {
    const index = await dispatch("getUserIndex", selectedUser);
    commit("DELETE_USER", index);
  }
};

const store = new Vuex.Store({
  modules: {
    state,
    getters,
    mutations,
    actions
  }
});

export default store;
