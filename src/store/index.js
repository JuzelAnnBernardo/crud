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
  async getUserIndex({ getters }, user) {
    const { id } = user;
    const index = getters.users.findIndex(u => u.id === id);
    console.log("getUserIndex", index);
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
  async updateUser({ commit, dispatch }, user) {
    const index = await dispatch("getUserIndex", user);
    commit("UPDATE_USER", {
      index,
      user
    });
  },
  async deleteUser({ commit, dispatch }, user) {
    const index = await dispatch("getUserIndex", user);
    commit("DELETE_USER", index);
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
