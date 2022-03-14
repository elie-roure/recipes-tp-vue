<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <label for="username">Username : </label>
        <input type="text" name="username" id="username" v-model="username" />
        <label for="pwd">Password : </label>
        <input type="password" name="pwd" id="pwd" v-model="pwd" />
        <a v-on:click="seConnecter()" class="waves-effect waves-light btn">
          Se connecter
        </a>
      </div>
    </div>
    <div>
      <p>Pas encore de compte ?</p>
      <p style="color: cadetblue">
        <router-link to="/register">S'enregistrer</router-link>
      </p>
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
