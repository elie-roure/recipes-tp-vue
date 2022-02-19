import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

import store from "./store/store";
import moment from "moment";

Vue.config.productionTip = false;
new Vue({
  router: router,
  store,
  render: (h) => h(App)
}).$mount("#app");

/*
new Vue({
  el: "#app",
  Router,
  template: "<App/>",
  components: { App }
});*/

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("HH:mm");
  }
});
Vue.component("Modal", {
  template: "#modal-template"
});
