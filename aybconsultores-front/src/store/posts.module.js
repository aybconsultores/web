import { PostService } from "../common/api.service";
import { FETCH_POSTS, FETCH_POST } from "./actions.type";
import { SET_POSTS, SET_POST } from "./mutations.type";

const state = {
  posts: []
};

const actions = {
  async [FETCH_POSTS](context, params) {
    const { data } = await PostService.query(params);
    context.commit(SET_POSTS, data);
    return data;
  },
  async [FETCH_POST](context, id, params) {
    const { data } = await PostService.get(id, params);
    context.commit(SET_POST, data);
    return data;
  }
};

const mutations = {
  [SET_POSTS](state, posts) {
    state.posts = posts;
  },
  [SET_POST](state, post) {
    state.post = post;
  },
};

const getters = {
  posts(state) {
    return state.posts;
  },
  post(state) {
    return state.post;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
