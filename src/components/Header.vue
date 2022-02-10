<template>
  <div class="header">
    <div class="headerTitle">
      <h4>Bienvenue sur les exercices de Vue.js ({{ numeroExo }}/6)</h4>
      <br />
    </div>
    <div class="row">
      <div class="col s3">
        <router-link to="/">Home</router-link>
      </div>
      <div class="col s3">
        <router-link to="/second">Page secondaire</router-link>
      </div>
    </div>
  </div>
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
.headerTitle {
  text-align: left;
  display: flex;
  justify-content: center;
}
.header {
  background-color: #41b883;
  height: 10rem;
}
h4,
a {
  margin: auto;
  color: #35495e;
}
</style>


