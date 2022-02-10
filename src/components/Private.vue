<template>
  <div class="container">
    <div>Private</div>
  </div>
</template>

<script>
import axios from "axios";

import { mapState } from "vuex";

export default {
  name: "Private",

  methods: {},

  computed: mapState({
    token: (state) => state.jwt,
  }),
  mounted() {
    console.log("private" + this.token);
    const config = { headers: { Authorization: `Bearer ${this.token}` } };

    axios.get("http://localhost:5000/private", config).then((response) => {
      console.log(response);
    });
  },
};
</script>
