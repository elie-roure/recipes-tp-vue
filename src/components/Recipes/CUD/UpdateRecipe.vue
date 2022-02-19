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

    <a class="waves-effect waves-light btn" v-on:click="updateRecipe()">
      Modifier
    </a>
  </div>
</template>

<script>
import store from "@/store/store";
import * as type from "@/types/types";
import moment from "moment";

export default {
  name: "UpdateRecipes",
  props: ["titleProp", "timeProp", "productsProp", "creatorProp", "idProp"],
  data: () => ({
    title: null,
    time: null,
    products: null,
    creator: null,
    id: null,
  }),

  created() {
    console.log(moment(String(this.timeProp)).format("HH:mm"));

    /*moment(String(value)).format('MM/DD/YYYY hh:mm')*/
    this.title = this.titleProp;
    this.time = moment(String(this.timeProp)).format("HH:mm");
    this.products = this.productsProp;
    this.creator = this.creatorProp;
    this.id = this.idProp;
  },

  methods: {
    updateRecipe() {
      store.dispatch({
        type: type.UpdateRecipe,
        title: this.title,
        time: this.time,
        products: this.products,
        creator: this.creator,
        _id: this.id,
      });
    },
  },
};
</script>

<style scoped>
</style>