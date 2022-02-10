<template>
  <div id="app" class="content">
    <Header numeroExo="5" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

  


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
