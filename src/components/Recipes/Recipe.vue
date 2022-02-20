<template >
  <div class="card clickable" v-on:click="afficheDetail">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator imageRecette" v-bind:src="srcImage" />
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
  props: ["title", "time", "products", "creator", "id", "imageData"],
  data() {
    return {
      srcImage: "",
    };
  },
  methods: {
    afficheDetail() {
      this.$router.push({ name: "RecipeDetail", params: { id: this.id } });
    },
  },
  created() {
    if (this.imageData !== undefined) {
      this.srcImage = this.imageData;
    } else {
      this.srcImage =
        "https://recipestp-2fc5.restdb.io/media/6211906bf701f460000b0a6a";
    }
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

.imageRecette {
  width: 15rem;
  height: 15rem;
  margin: auto;
}
</style>

