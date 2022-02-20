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
      <!--<div class="row">
        <div class="input-field col s12">
          <input type="file" accept="image/*" @change="uploadImage" />
        </div>
      </div>-->
    </form>
    <div>
      <input type="file" @change="uploadFile" ref="file" />
      <button @click="submitFile">Upload!</button>
    </div>
    <a class="waves-effect waves-light btn" v-on:click="updateRecipe()">
      Modifier
    </a>
  </div>
</template>

<script>
import store from "@/store/store";
import * as type from "@/types/types";
import moment from "moment";
import axios from "axios";
export default {
  name: "UpdateRecipes",
  props: ["titleProp", "timeProp", "productsProp", "creatorProp", "idProp"],
  data: () => ({
    title: null,
    time: null,
    products: null,
    creator: null,
    id: null,
    file: null,
  }),

  created() {
    console.log(moment(String(this.timeProp)).format("HH:mm"));

    /*moment(String(value)).format('MM/DD/YYYY hh:mm')*/
    this.title = this.titleProp;
    this.time = moment(String(this.timeProp)).format("HH:mm");
    this.products = this.productsProp;
    this.creator = this.creatorProp;
    this.id = this.idProp;
    this.file = "";
  },

  methods: {
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://localhost:62000/image", formData, { headers })
        .then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
          console.log(res);
        });
    },
    uploadImage(e) {
      this.file = e.target.files[0];

      console.log("file" + this.file);

      let formData = new FormData();
      let files = e.target.files[0];
      // Loop through each of the selected files.
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let name = files[0].name;
        // Add the file to the request.
        formData.append("myfile", file, file.name);
      }
      this.file = formData;
      /*
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.file = e.target.result;
        console.log(this.file);
        this.file = e.target.files[0];
      };*/
    },
    updateRecipe() {
      store.dispatch({
        type: type.UpdateRecipe,
        title: this.title,
        time: this.time,
        products: this.products,
        creator: this.creator,
        _id: this.id,
        image: this.file,
        file: this.file,
      });
    },
  },
};
</script>

<style scoped>
</style>