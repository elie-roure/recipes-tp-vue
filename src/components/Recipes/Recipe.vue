<template >
  <div class="card clickable medium" v-on:click="afficheDetail">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator imageRecette" v-bind:src="srcImage" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        {{ title }}
      </span>
      <span class="card-body activator grey-text text-darken-4">
        {{ time | formatDate }}
      </span>
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
    if (
      this.imageData !== undefined &&
      this.imageData !== "" &&
      this.imageData !== null
    ) {
      this.srcImage = this.imageData;
    } else {
      this.srcImage = "image/recette.jpg";
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

.card-title {
  font-size: 22px;
  font-weight: 500;
}
</style>

