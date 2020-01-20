import Vue from "vue";
import Vuex from "vuex";
import projects from "./projects.module";
import mvps from "./mvps.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    projects,
    mvps
  }
});
