import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    skills: [],
    jwt: ""
  },
  mutations: {
    increment(state, payload) {
      return (state.count = state.count + payload.amount);
    },
    decrement(state, payload) {
      return (state.count = state.count - payload.amount);
    },
    addSkill(state, payload) {
      console.log(payload);
      let feed = { skill: payload.skill, percent: payload.percent };
      state.skills.push(feed);

      console.log(state.skills);
      /*state.percent = payload.percent;*/
      return;
    },
    removeSkill(state, payload) {
      state.skill = "";
      state.percent = "";
      return;
    },
    addJwt(state, payload) {
      console.log(payload.jwt);
      return (state.jwt = payload.jwt);
    }
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
    addSkill(context, payload) {
      context.commit("addSkill", payload);
    },
    removeSkill(context, payload) {
      context.commit("removeSkill", payload);
    },
    addJwt(context, payload) {
      context.commit("addJwt", payload);
    }
  }
});
export default store;
