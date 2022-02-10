<template>
  <div>
    <h5>Mes skills</h5>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Mon niveau</th>
        </tr>
      </thead>

      <tbody>
        <!--<Skill nameSkill="Symfony" percentSkill="50%"></Skill>-->
        <Skill
          v-for="(skill, key) in skills"
          :nameSkill="skill.skill"
          :percentSkill="skill.percent"
          :key="key"
        ></Skill>
      </tbody>
    </table>
    <div class="row">
      <div class="columns">
        <div class="col s12">
          <AddSkill></AddSkill>
        </div>
        <!--<div class="col s6">
          <RemoveSkill></RemoveSkill>
        </div>-->
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Skill from "./Skill";
import axios from "axios";

import AddSkill from "./AddSkill.vue";
import RemoveSkill from "./RemoveSkill.vue";

export default {
  name: "MySkills",
  components: {
    Skill,
    AddSkill,
    /*RemoveSkill,*/
  },
  computed: mapState({
    skills: (state) => state.skills,
  }),
  /*data() {
    return {
      skills: [],
    };
  },*/
  /*created() {
    axios.get("http://localhost:3000/getSkills").then((response) => {
      this.skills = response.data.skills;
    });
  },*/
};
</script>

