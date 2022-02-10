<template>
  <tr>
    <td>{{ nameSkill }}</td>
    <td>{{ percentSkill }}</td>
  </tr>
</template>


<script>
export default {
  name: "Skill",
  props: ["nameSkill", "percentSkill"],
};
</script>