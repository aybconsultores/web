import { PostService } from "../common/api.service";
import { FETCH_POSTS } from "./actions.type";
import { SET_POSTS } from "./mutations.type";

const state = {
  posts: []
};

const actions = {
  async [FETCH_POSTS](context, params) {
    const { data } = await PostService.query(params);
    context.commit(SET_POSTS, data);
    return data;
  }
};

const mutations = {
  [SET_POSTS](state, posts) {
    state.posts = posts;
  }
};

const getters = {
  posts(state) {
    return state.posts;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
