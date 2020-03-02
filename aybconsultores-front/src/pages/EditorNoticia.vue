<template>
  <div class="container-fluid">
    <h3 class="pt-4 pb-3">Editor de noticias</h3>
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-2">
            <label class="form-control">Foto</label>
          </div>
          <div class="col-lg-10">
            <input type="text" class="form-control" v-model="post.photo"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2">
            <label class="form-control">Titulo</label>
          </div>
          <div class="col-lg-10">
            <input type="text" class="form-control" v-model="post.title"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2">
            <label class="form-control">Categor&iacute;a</label>
          </div>
          <div class="col-lg-10">
            <select name="" id="" class="form-control" v-model="post.category">
              <option value="Finanzas">Finanzas</option>
              <option value="Contabilidad">Contabilidad</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <vue-editor v-model="post.content" />
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-sm-none d-md-block app-div-v">
        <div class="row app-visor-post-editor">
          <div class="col-lg-12">
            <div class="row"><Post :post="post" /></div>
            <div class="row"><div v-html="post.content"></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import store from "../store";
import { FETCH_POST } from "../store/actions.type";
import { VueEditor } from "vue2-editor";
import Post from '../components/Post';

export default {
  name: 'EditorNoticia',
  components: { VueEditor,Post },
  data: () => ({
    post: {}
  }),
  methods: {
    getPostById: function(id) {
      store.dispatch(FETCH_POST, id, { "_expand": "author"}).then(response => {
        this.post = response;
      })
    }
  },
  created() {
    this.getPostById(this.$route.params.id);
  }
}
</script>
