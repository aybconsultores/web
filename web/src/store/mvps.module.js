import { MvpsService } from "../common/api.service";
import { FETCH_MVPS } from "./actions.type";
import { SET_MVPS } from "./mutations.type";

const state = {
  mvps: []
};

const actions = {
  async [FETCH_MVPS](context, params) {
    const { data } = await MvpsService.query(params);
    context.commit(SET_MVPS, data);
    return data;
  }
};

const mutations = {
  [SET_MVPS](state, mvps) {
    state.mvps = mvps;
  }
};

const getters = {
  mvps(state) {
    return state.mvps;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
