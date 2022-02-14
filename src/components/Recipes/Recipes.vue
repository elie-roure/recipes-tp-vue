<template>
  <div class="container">
    <div class="row">
      <h5>Recipes</h5>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Temps</th>
            <th>Produit ?</th>
            <th>Createur</th>
          </tr>
        </thead>
        <tbody>
          <Recipe
            v-for="(recipe, key) in recipes"
            :title="recipe.title"
            :time="recipe.time"
            :products="recipe.products"
            :creator="recipe.creator"
            :id="recipe._id"
            :key="key"
          ></Recipe>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Recipe from "@/components/Recipes/Recipe";
import store from "../../store";
import * as type from "../../types";
export default {
  name: "Recipes",
  components: {
    Recipe,
  },
  created() {
    store.dispatch({
      type: type.InitRecipes,
    });
  },
  computed: mapState({
    recipes: (state) => state.recipes,
  }),
};
</script>

<style scoped>
</style>