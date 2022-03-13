<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo left">Recipes & Co</router-link>
      <ul class="right">
        <li><router-link to="/login">Se connecter</router-link></li>
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
  color: white;
}

.right {
  margin-right: 10px;
}

ul li a {
  font-size: 18px;
}

nav .brand-logo {
  position: unset;
  margin-left: 10px;
}
</style>


