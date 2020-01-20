import { ProjectService } from "../common/api.service";
import { FETCH_PROJECTS } from "./actions.type";
import { SET_PROJECTS } from "./mutations.type";

const state = {
  projects: []
};

const actions = {
  async [FETCH_PROJECTS](context, params) {
    const { data } = await ProjectService.query(params);
    context.commit(SET_PROJECTS, data);
    return data;
  }
};

const mutations = {
  [SET_PROJECTS](state, projects) {
    state.projects = projects;
  }
};

const getters = {
  projects(state) {
    return state.projects;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
