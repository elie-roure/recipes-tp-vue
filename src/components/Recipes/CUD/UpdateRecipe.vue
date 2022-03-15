<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="title" type="text" class="validate" v-model="title" />
          <label class="active" for="title">Titre</label>
        </div>
        <div class="input-field col s6">
          <input id="time" type="time" class="validate" v-model="time" />
          <label class="active" for="time">Temps</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <textarea
            id="products"
            class="materialize-textarea"
            v-model="products"
          ></textarea>
          <label class="active" for="products">Ingredients</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="file" accept="image/*" @change="uploadImage" />
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
    imageData: null,
  }),

  created() {
    this.title = this.titleProp;
    this.time = moment(String(this.timeProp)).format("HH:mm");
    this.products = this.productsProp;
    this.creator = this.creatorProp;
    this.id = this.idProp;
    this.imageData = "";
  },

  methods: {
    uploadImage: async function () {
      let that = this;
      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();
      reader.onload = (event) => {
        that.imageData = event.target.result;
      };
      reader.onerror = function (error) {
        alert(error);
      };
      reader.readAsDataURL(file);
    },

    updateRecipe() {
      console.log("update : " + this.imageData);
      store.dispatch({
        type: type.UpdateRecipe,
        title: this.title,
        time: this.time,
        products: this.products,
        creator: this.creator,
        _id: this.id,
        imageData: this.imageData,
      });
      let recipe = {
        title: this.title,
        time: this.time,
        products: this.products,
        creator: this.creator,
        _id: this.id,
        imageData: this.imageData,
      };
      this.$emit("update", recipe);
    },
  },
};
</script>

<style scoped>
</style>