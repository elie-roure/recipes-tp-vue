<template>
  <div class="">
    <div class="row">
      <div>
        <h4>OUR RECIPES</h4>
        <a class="waves-effect waves-light btn"
          ><router-link to="/createRecipe">Ajouter Recette</router-link></a
        >
      </div>
      <Recipe
        class="col s12 m3"
        v-for="(recipe, key) in recipes"
        :title="recipe.title"
        :time="recipe.time"
        :products="recipe.products"
        :creator="recipe.creator"
        :id="recipe._id"
        :imageData="recipe.imageData"
        :key="key"
      ></Recipe>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Recipe from "@/components/Recipes/Recipe";
import store from "@/store/store";
import * as type from "@/types/types";
export default {
  name: "Recipes",
  components: {
    Recipe,
  },
  created() {
    store.dispatch({
      type: type.GetAllRecipes,
    });
  },
  computed: mapState({
    recipes: (state) => state.recipes,
  }),
};
</script>

<style scoped>
a {
  color: white;
}

.btn {
  margin-bottom: 10px;
}
.padding-left {
  padding-left: 5rem;
}
</style>