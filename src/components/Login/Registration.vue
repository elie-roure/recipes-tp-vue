<template>
  <div class="container">
    <h5>S'Enregistrer</h5>

    <label for="name">Prenom : </label>
    <input type="text" name="name" id="name" v-model="name" />
    <label for="mail">Email : </label>
    <input type="email" name="mail" id="mail" v-model="mail" />
    <label for="telephone">Tel : </label>
    <input type="text" name="telephone" id="telephone" v-model="telephone" />

    <label for="username">Nom d'utilisateur : </label>
    <input type="text" name="username" id="username" v-model="username" />
    <label for="password">Mot de passe : </label>
    <input type="password" name="password" id="password" v-model="password" />
    <button @click="senregistrer()">Enregistrer</button>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Registration",
  data() {
    return {
      name: "",
      mail: "",
      telephone: "",
      username: "",
      password: "",
    };
  },
  methods: {
    senregistrer: function (e) {
      console.log(
        "name : " +
          this.name +
          " password " +
          this.password +
          " mail : " +
          this.mail +
          " telephone " +
          this.telephone
      );

      const params = JSON.stringify({
        name: this.name,
        mail: this.mail,
        tel: this.telephone,
        username: this.username,
        password: this.password,
      });
      console.log(params);
      axios
        .post("http://localhost:5000/users", params, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>



