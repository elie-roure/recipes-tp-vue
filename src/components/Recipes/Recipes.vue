<template>
  <div class="">
    <div class="row">
      <h5>Recipes</h5>
          <Recipe class="col s3"
            v-for="(recipe, key) in recipes"
            :title="recipe.title"
            :time="recipe.time"
            :products="recipe.products"
            :creator="recipe.creator"
            :id="recipe._id"
            :key="key"
          ></Recipe>
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

.padding-left {
  padding-left: 5rem;
}
</style>