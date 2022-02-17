<template>
  <div class="container">
    <h5>S'Enregistrer</h5>

    <label for="name">Prenom : </label>
    <input type="text" name="name" id="name" v-model="name" />
    <label for="mail">Email : </label>
    <input type="email" name="mail" id="mail" v-model="mail" />

    <label for="username">Nom d'utilisateur : </label>
    <input type="text" name="username" id="username" v-model="username" />
    <label for="password">Mot de passe : </label>
    <input type="password" name="password" id="password" v-model="password" />
    <button @click="senregistrer()">Enregistrer</button>
  </div>
</template>


<script>
import axios from "axios";

import store from "../../store";
import * as type from "../../types";

export default {
  name: "Registration",
  data() {
    return {
      name: "",
      mail: "",
      username: "",
      password: "",
    };
  },
  methods: {
    seConnecter: function (e) {
      let self = this;

      axios
        .post("http://localhost:62000/login", {
          name: this.name,
          password: this.password,
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
      self.$router.push({ name: "Home" });
    },
    senregistrer: function (e) {
      let self = this;

      console.log(
        "name : " +
          this.name +
          " password " +
          this.password +
          " mail : " +
          this.mail
      );

      const params = JSON.stringify({
        name: this.name,
        mail: this.mail,
        username: this.username,
        password: this.password,
      });
      console.log(params);
      axios
        .post("http://localhost:62000/users", params, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response);
          /*Connexion apres  registration*/
          self.seConnecter();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>



