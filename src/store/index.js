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
  async getUserIndex({ getters }, payload) {
    const { id } = payload;
    const index = getters.users.findIndex(user => user.id === id);
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
  async createUser({ commit }, payload) {
    commit("CREATE_USER", payload);
  },
  async updateUser({ commit, dispatch }, payload) {
    const index = await dispatch("getUserIndex", payload);
    commit("UPDATE_USER", {
      index,
      user: payload
    });
  },
  async deleteUser({ commit, dispatch }, payload) {
    const index = await dispatch("getUserIndex", payload);
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
