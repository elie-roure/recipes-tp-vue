import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Private from "@/components/Private";
import Login from "@/components/Login/Login";
import Registration from "@/components/Login/Registration";
import RecipeDetail from "@/components/Recipes/RecipeDetail";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home"
    },
    {
      path: "/private",
      component: Private,
      name: "Private"
    },
    {
      path: "/login",
      component: Login,
      name: "Login"
    },
    {
      path: "/register",
      component: Registration,
      name: "Register"
    },
    {
      path: `/recipe/:id`,
      component: RecipeDetail,
      name: "RecipeDetail"
    }
  ]
});
