<template >
  <tr v-on:click="afficheDetail">
    <td>{{ title }}</td>
    <td>{{ time | formatDate }}</td>
    <td>{{ products }}</td>
    <td>{{ creator }}</td>
  </tr>
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

