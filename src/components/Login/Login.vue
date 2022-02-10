<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <label for="login">Login : </label>
        <input type="text" name="login" id="login" v-model="login" />
        <label for="pwd">Password : </label>
        <input type="password" name="pwd" id="pwd" v-model="pwd" />
        <button class="button is-primary" v-on:click="seConnecter()">
          Se connecter
        </button>
      </div>
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

  methods: {
    seConnecter: function (e) {
      console.log(this.login + " " + this.pwd);
      /*axios({
        method: "post",
        url: "http://localhost:5000/login",
        data: {
          name: this.login,
          password: this.pwd,
        },
      });*/
      axios
        .post("http://localhost:5000/login", {
          name: this.login,
          password: this.pwd,
        })
        .then(function (response) {
          console.log(response);
          store.dispatch({
            type: type.AddJwt,
            jwt: response.data.jwt,
          });
          console.log("login " + response.data.jwt);
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
