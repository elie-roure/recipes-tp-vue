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
    <a v-on:click="senregistrer()" class="waves-effect waves-light btn">
      S'Enregistrer
    </a>
  </div>
</template>


<script>
import store from "@/store/store";
import * as type from "@/types/types";
import * as Helper from "@/helper/helper";

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
    seConnecter: async function (e) {
      let self = this;
      let res = await Helper.loginHelper(this.username, this.password);
      if (res !== undefined) {
        store.dispatch({
          type: type.AddJwt,
          jwt: res.data.jwt,
          user: res.data.user,
        });
        self.$router.push({ name: "Home" });
      }
    },
    senregistrer: async function (e) {
      let self = this;
      const params = JSON.stringify({
        name: this.name,
        mail: this.mail,
        username: this.username,
        password: this.password,
      });
      let res = await Helper.registerHelper(params);
      if (res !== undefined) {
        self.seConnecter();
      }
    },
  },
};
</script>



