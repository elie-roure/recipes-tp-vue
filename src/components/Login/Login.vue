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
import store from "@/store/store";
import * as type from "@/types/types";
import * as Helper from "@/helper/helper";
export default {
  name: "Login",

  data() {
    return {
      username: "",
      pwd: "",
    };
  },
  components: {},

  methods: {
    seConnecter: async function (e) {
      let self = this;
      let res = await Helper.loginHelper(this.username, this.pwd);
      if (res !== undefined) {
        store.dispatch({
          type: type.AddJwt,
          jwt: res.data.jwt,
          user: res.data.user,
        });
        self.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
