<template>
  <div>
    {{ recipe._id }}
    {{ recipe.title }}
    <button id="show-modal" @click="showModal = true">Modifier recette</button>
    <Modal v-if="this.showModal" @close="showModal = false">
      <span slot="header"></span>
      <UpdateRecipe
        slot="body"
        :titleProp="recipe.title"
        :timeProp="recipe.time"
        :productsProp="recipe.products"
        :creatorProp="recipe.creator"
        :idProp="recipe._id"
      ></UpdateRecipe>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/Modal";
import UpdateRecipe from "@/components/Recipes/CUD/UpdateRecipe";
export default {
  name: "RecipeDetail",
  components: {
    Modal,
    UpdateRecipe,
  },
  data() {
    return {
      recipe: "",
      showModal: false,
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