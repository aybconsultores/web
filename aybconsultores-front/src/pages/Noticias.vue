<template>
  <div class="container-fluid">
    <h3 class="pt-4 pb-3">Administrador de Noticias</h3>
    <div class="row">
      <div class="col-lg-6">
        <ag-grid-vue
          class="app-grid ag-theme-balham"
          :columnDefs="columnDefs"
          :rowData="rowData"
          @grid-ready="onGridReady" />
      </div>
      <div class="col-lg-6">
        <Post />
        <div v-html="content" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "../store";
import { FETCH_POSTS } from "../store/actions.type";
import { AgGridVue } from "ag-grid-vue";
import Post from '../components/Post';

export default {
  name: 'Noticias',
  components: { AgGridVue, Post },
  props: {
    params: Object
  },
  beforeRouteEnter: (to, from, next) => {
    Promise.all([
      store.dispatch(FETCH_POSTS, { "_expand": "author"})
    ]).then(() => {
      next();
    });
  },
  data: () => ({
    content: "<h1>Some initial content</h1>",
    columnDefs: [
      {field: 'title', headerName: "Titulo"},
      {field: 'category', headerName: "Categoría"},
      {field: 'created', headerName: "Fecha"},
      {field: 'likes', headerName: "# Me Gusta"},
      {field: 'numberOfComments', headerName: "# Comentarios"}
    ]
  }),
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    }
  },
  computed: {
    ...mapGetters([ "posts" ]),
    rowData() {
      return [ ...this.posts ]
    }
  }
}
</script>
