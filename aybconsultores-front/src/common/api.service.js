import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const API_URL = "http://localhost:3000/"

const ApiService = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    // Vue.axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`;
    // Vue.axios.defaults.headers.common["Cookie"] = `Token ${JwtService.getToken()}`;
  }
}

class AbstractService {
  
  constructor(resource) {
    this.resource = resource;
  }

  query(params) {
    return Vue.axios.get(this.resource, { params }).catch(error => {
      throw new Error(`AbstractService ${error}`);
    });
  }

  get(slug = "", params) {
    return Vue.axios.get(`${this.resource}/${slug}`, { params }).catch(error => {
      throw new Error(`AbstractService ${error}`);
    });
  }

  post(params) {
    return Vue.axios.post(`${this.resource}`, params);
  }

  update(slug, params) {
    return Vue.axios.put(`${this.resource}/${slug}`, params);
  }

  put(params) {
    return Vue.axios.put(`${this.resource}`, params);
  }

  delete(slug = "") {
    return Vue.axios.delete(`${this.resource}/${slug}`).catch(error => {
      throw new Error(`AbstractService ${error}`);
    });
  }
}

export const PostService = new AbstractService("posts");

export default ApiService;
