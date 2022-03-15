<template>
  <div>
    <div class="row">
      <div class="back-button">
        <a class="waves-effect waves-light btn">
          <router-link to="/" class="inline-items">
            <i class="small material-icons">chevron_left</i>
            Retour</router-link
          >
        </a>
      </div>
      <p style="display: none">{{ recipe._id }}</p>
      <h4>{{ recipe.title }}</h4>
      <img v-bind:src="this.srcImage" alt="" />
      <p>Durée : {{ recipe.time | formatDate }}</p>
      <p>Ingrédients :</p>
      <div class="products">
        <pre>{{ recipe.products }}</pre>
      </div>
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
            @update="UpdateRecipe($event)"
          ></UpdateRecipe>
          <span slot="footer">Recette modifiée !</span>
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
  methods: {
    UpdateRecipe: function (e) {
      this.recipe = e;
      this.InitImage();
    },
    InitImage: function () {
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
  },
  created() {},
  computed: mapState({
    user: (state) => state.user,
  }),
  async mounted() {
    this.recipe = await Helper.getOneRecipesHelper(this.$route.params.id);
    this.showBtn = this.user._id === this.recipe.creator;
    this.InitImage();
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

pre {
  font: inherit;
  margin: auto;
  width: 33%;
  padding: 1rem;
  background-color: whitesmoke;
}

.products {
  text-align: left;
  margin: auto;
}

.inline-items {
  display: inline-flex;
  color: white;
  text-decoration: none;
}

.back-button {
  display: flex;
  margin-left: 2%;
  margin-top: 2%;
}
</style>