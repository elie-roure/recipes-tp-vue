
<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <label for="skill">Skill : </label>
        <input type="text" name="skill" id="skill" v-model="skill" />
        <label for="percent">percent : </label>
        <input type="text" name="percent" id="percent" v-model="percent" />
        <button class="button is-primary" v-on:click="addSkill()">
          Add skill
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import * as type from "../../types";

export default {
  methods: {
    addSkill() {
      store.dispatch({
        type: type.AddSkill,
        skill: this.skill,
        percent: this.percent,
      });
    },
  },

  data() {
    return {
      skill: "",
      percent: "",
    };
  },
};
</script>