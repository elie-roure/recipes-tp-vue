<template>
  <div>
    <div class="row">
      {{ recipe._id }}
      {{ recipe.title }}
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
      <div class="col s6">
        <DeleteRecipe v-if="this.showBtn" :_id="recipe._id"></DeleteRecipe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    };
  },
  created() {},
  computed: mapState({
    user: (state) => state.user,
  }),
  mounted() {
    axios
      .get(`http://localhost:62000/recipes/${this.$route.params.id}`)
      .then((response) => {
        this.recipe = response.data;
        this.showBtn = this.user._id === this.recipe.creator;
      });
  },
};
</script>