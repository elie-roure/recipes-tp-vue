import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jwt: "",
    user: "",
    recipes: []
  },
  mutations: {
    addJwt(state, payload) {
      console.log(payload.jwt);
      state.user = payload.user;
      state.jwt = payload.jwt;
    },
    initRecipes(state) {
      axios.get("http://localhost:62000/recipes").then((response) => {
        state.recipes = response.data;
        console.log(state.recipes);
      });
    }
  },
  actions: {
    addJwt(context, payload) {
      context.commit("addJwt", payload);
    },
    initRecipes(context, payload) {
      context.commit("initRecipes", payload);
    }
  }
});
export default store;
