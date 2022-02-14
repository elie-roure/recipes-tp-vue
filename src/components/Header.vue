<template>
  <nav>
    <div class="nav-wrapper">
      <div class="right">
        <router-link to="/login">Se connecter</router-link>
      </div>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Recettes</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    numeroExo: String,
  },
};
</script>

<style scoped>
h4,
a {
  margin: auto;
  color: #35495e;
}
</style>


