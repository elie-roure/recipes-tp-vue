<template >
  <div class="card clickable" v-on:click="afficheDetail">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{
        title
      }}</span>
      <span class="card-body activator grey-text text-darken-4">{{
        time | formatDate
      }}</span>
      <p><a href="#">Détails</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"
        >Card Title<i class="material-icons right">close</i></span
      >
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  components: {},
  props: ["title", "time", "products", "creator", "id"],
  methods: {
    afficheDetail() {
      this.$router.push({ name: "RecipeDetail", params: { id: this.id } });
    },
  },
};
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
  background: whitesmoke;
  transition: background-color 1s;
}
.clickable:visited {
  text-decoration: none;
}
.clickable:link {
  text-decoration: none;
}

.clickable {
  margin-left: 50px;
}

.padding-left {
  padding-left: 5rem;
}
</style>

