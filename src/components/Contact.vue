<template>
  <div class="footer">
    <h5>Mon formulaire</h5>
    <label for="firstname">Prenom : </label>
    <input type="text" name="firstname" id="firstname" v-model="firstname" />
    <label for="surname">Nom : </label>
    <input type="text" name="surname" id="surname" v-model="surname" />
    <label for="email">Email : </label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="subject">Sujet : </label>
    <textarea name="subject" id="subject" v-model="subject" />
    <button @click="checkForm()">Enregistrer</button>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      firstname: "",
      surname: "",
      email: "",
      subject: "",
    };
  },
  methods: {
    checkForm: function (e) {
      console.log(
        this.firstname +
          " " +
          this.surname +
          " " +
          this.email +
          " " +
          this.subject
      );
    },
  },
};
</script>



