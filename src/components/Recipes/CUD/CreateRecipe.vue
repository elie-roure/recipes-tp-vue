<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="title" type="text" class="validate" v-model="title" />
          <label for="title">Titre</label>
        </div>
        <div class="input-field col s6">
          <input id="time" type="time" class="validate" v-model="time" />
          <label for="time">Temps</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <textarea
            id="products"
            class="materialize-textarea"
            v-model="products"
          ></textarea>
          <label for="products">Ingredients</label>
        </div>
      </div>
    </form>
    <a class="waves-effect waves-light btn" v-on:click="createRecipe()">
      Modifier
    </a>
  </div>
</template>

<script>
import store from "@/store/store";
import * as type from "@/types/types";
export default {
  name: "CreateRecipes",
  data: () => ({
    title: null,
    time: null,
    products: null,
    file: null,
  }),

  methods: {
    createRecipe() {
      store.dispatch({
        type: type.CreateRecipe,
        title: this.title,
        time: this.time,
        products: this.products,
        image: this.file,
        file: this.file,
      });
    },
  },
};
</script>

<style scoped>
</style>