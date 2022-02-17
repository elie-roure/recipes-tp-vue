<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <label for="username">Username : </label>
        <input type="text" name="username" id="username" v-model="username" />
        <label for="pwd">Password : </label>
        <input type="password" name="pwd" id="pwd" v-model="pwd" />
        <button class="button is-primary" v-on:click="seConnecter()">
          Se connecter
        </button>
      </div>
    </div>
    <div>
      <p>Pas encore de compte ?</p>
      <router-link to="/register">S'enregistrer</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../../store";
import * as type from "../../types";
export default {
  name: "Login",

  data() {
    return {
      login: "",
      pwd: "",
    };
  },
  components: {},

  methods: {
    seConnecter: function (e) {
      let self = this;
      console.log(this.username + " " + this.pwd);
      axios
        .post("http://localhost:62000/login", {
          name: this.username,
          password: this.pwd,
        })
        .then(function (response) {
          store.dispatch({
            type: type.AddJwt,
            jwt: response.data.jwt,
            user: response.data.user,
          });
          console.log("avant redirection");
          self.$router.push({ name: "Home" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  /*created() {
    axios.get("http://localhost:5000/recipes").then((response) => {
      console.log(response.data);
    });
  },*/
};
</script>
