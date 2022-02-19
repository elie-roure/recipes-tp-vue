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
    },
    updateRecipe(state, payload) {
      let recipe = {
        _id: payload._id,
        title: payload.title,
        products: payload.products,
        time: payload.time,
        creator: payload.creator
      };
      console.log(recipe);

      const config = {
        headers: { Authorization: `Bearer ${state.jwt}` }
      };

      axios
        .put(`http://localhost:62000/recipes/${payload._id}`, recipe, config)
        .then((response) => {
          console.log(response);
        });
    },
    createRecipe(state, payload) {
      console.log("createRecipe");
    },
    deleteRecipe(state, payload) {
      console.log("deleteRecipe");
    }
  },
  actions: {
    addJwt(context, payload) {
      context.commit("addJwt", payload);
    },
    initRecipes(context, payload) {
      context.commit("initRecipes");
    },
    updateRecipe(context, payload) {
      context.commit("updateRecipe", payload);
    },
    createRecipe(context, payload) {
      context.commit("createRecipe", payload);
    },
    deleteRecipe(context, payload) {
      context.commit("deleteRecipe", payload);
    }
  }
});
export default store;
