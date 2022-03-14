<template>
  <div id="app" class="content">
    <Header numeroExo="5" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  updated() {
    console.log("toto");

    console.log(this.user);
    if (
      this.$route.name !== "Login" &&
      this.$route.name !== "Register" &&
      this.user === ""
    ) {
      console.log("redirection");
      this.$router.push({ name: "Login" });
    }
  },

  computed: mapState({
    user: (state) => state.user,
  }),
};
</script>

  


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100%;
  height: max-content;
}
html,
body {
  height: 100%;
}
</style>
