<template>
  <div class="footer">
    <h5>S'Enregistrer</h5>
    <label for="name">Prenom : </label>
    <input type="text" name="name" id="name" v-model="name" />
    <label for="password">password : </label>
    <input type="password" name="password" id="password" v-model="password" />
    <label for="mail">Email : </label>
    <input type="email" name="mail" id="mail" v-model="mail" />
    <label for="telephone">tel : </label>
    <input type="text" name="telephone" id="telephone" v-model="telephone" />
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
      password: "",
      mail: "",
      telephone: "",
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
        password: this.password,
        mail: this.mail,
        tel: this.telephone,
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



