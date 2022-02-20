<template>
  <a class="waves-effect waves-light btn" v-on:click="deleteRecipe()">
    Supprimer
  </a>
</template>

<script>
import store from "@/store/store";
import * as type from "@/types/types";
export default {
  name: "DeleteRecipes",
  props: ["_id"],
  methods: {
    deleteRecipe() {
      store.dispatch({
        type: type.DeleteRecipe,
        _id: this._id,
      });
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
</style>