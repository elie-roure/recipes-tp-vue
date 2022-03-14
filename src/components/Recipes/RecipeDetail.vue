<template>
  <div>
    <div class="row">
      <p style="display: none">{{ recipe._id }}</p>
      <h4>{{ recipe.title }}</h4>
      <img v-bind:src="this.srcImage" alt="" />
      <p>Durée : {{ recipe.time | formatDate }}</p>
      <p>Ingrédients :</p>
      <ul>
        <li>{{ recipe.products }}</li>
      </ul>
    </div>
    <div class="row">
      <div class="col s6">
        <a
          v-if="this.showBtn"
          class="waves-effect waves-light btn"
          @click="showModalUpdate = true"
        >
          Modifier recette
        </a>
        <Modal v-if="this.showModalUpdate" @close="showModalUpdate = false">
          <h5 slot="header">Modification recette</h5>

          <UpdateRecipe
            slot="body"
            :titleProp="recipe.title"
            :timeProp="recipe.time"
            :productsProp="recipe.products"
            :creatorProp="recipe.creator"
            :idProp="recipe._id"
          ></UpdateRecipe>
          <span slot="footer"></span>
        </Modal>
      </div>
      <div class="col s6">
        <DeleteRecipe v-if="this.showBtn" :_id="recipe._id"></DeleteRecipe>
      </div>
    </div>
  </div>
</template>

<script>
import * as Helper from "@/helper/helper";
import Modal from "@/components/Modal";
import UpdateRecipe from "@/components/Recipes/CUD/UpdateRecipe";
import DeleteRecipe from "@/components/Recipes/CUD/DeleteRecipe";
import { mapState } from "vuex";
export default {
  name: "RecipeDetail",
  components: {
    Modal,
    UpdateRecipe,
    DeleteRecipe,
  },
  data() {
    return {
      recipe: "",
      showBtn: false,
      showModalUpdate: false,
      srcImage: "",
    };
  },
  created() {},
  computed: mapState({
    user: (state) => state.user,
  }),
  async mounted() {
    this.recipe = await Helper.getOneRecipesHelper(this.$route.params.id);
    this.showBtn = this.user._id === this.recipe.creator;
    if (
      this.recipe.imageData !== undefined &&
      this.recipe.imageData !== "" &&
      this.recipe.imageData !== null
    ) {
      this.srcImage = this.recipe.imageData;
    } else {
      this.srcImage = "image/recette.jpg";
    }
  },
};
</script>

<style scoped>
img {
  height: 200px;
  width: 200px;
}

p {
  font-size: 16px;
}
</style>