
<template>
  <div class="cotainer">
    <div class="notification">
      <h1 class="title" align="center">
        {{ count }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>
