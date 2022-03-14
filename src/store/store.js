import Vue from "vue";
import Vuex from "vuex";
import * as Helper from "@/helper/helper";
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
    async getAllRecipes(state) {
      state.recipes = await Helper.getAllRecipesHelper();
    },
    updateRecipe(state, payload) {
      let recipe = {
        _id: payload._id,
        title: payload.title,
        products: payload.products,
        time: payload.time,
        creator: payload.creator,
        imageData: payload.imageData
      };
      Helper.updateRecipeHelper(state.jwt, recipe);
    },
    createRecipe(state, payload) {
      let recipe = {
        title: payload.title,
        products: payload.products,
        time: payload.time,
        creator: state.user._id,
        image: payload.image,
        file: payload.file
      };
      Helper.createRecipeHelper(state.jwt, recipe);
    },
    deleteRecipe(state, payload) {
      Helper.deleteRecipeHelper(state.jwt, payload._id);
      state.recipes.remove((recipe) => (recipe._id = payload._id));
    }
  },
  actions: {
    addJwt(context, payload) {
      context.commit("addJwt", payload);
    },
    getAllRecipes(context) {
      context.commit("getAllRecipes");
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
