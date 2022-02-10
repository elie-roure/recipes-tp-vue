<template>
  <div class="container">
    <div class="row">
      <div class="col s6">
        <MySkills />
      </div>
      <div class="col s6"><Contact /></div>
    </div>

    <div class="row">
      <Counter></Counter><br />
      <div class="columns">
        <div class="col s6">
          <AddCounter></AddCounter>
        </div>
        <div class="col s6">
          <RemoveCounter></RemoveCounter>
        </div>
      </div>
    </div>

    <div>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";
import MySkills from "./Skill/MySkills";

import Counter from "./Counter/Counter.vue";
import AddCounter from "./Counter/AddCounter.vue";
import RemoveCounter from "./Counter/RemoveCounter.vue";

import Login from "./Login/Login.vue";

export default {
  name: "Body",
  components: {
    Contact,
    MySkills,
    Counter,
    AddCounter,
    RemoveCounter,
    Login,
  },
};
</script>



