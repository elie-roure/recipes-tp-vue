<template>
  <div>
    {{ recipe._id }}
    {{ recipe.title }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecipeDetail",
  data() {
    return {
      recipe: "",
    };
  },
  mounted() {
    axios
      .get(`http://localhost:62000/recipes/${this.$route.params.id}`)
      .then((response) => {
        this.recipe = response.data;
        console.log(this.recipe);
      });
  },
};
</script>