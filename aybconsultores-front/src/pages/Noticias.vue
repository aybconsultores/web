<template>
  <div class="container-fluid">
    <h3 class="pt-4 pb-3">Administrador de Noticias</h3>
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="row">
          <div class="col-lg-10">
            <h3>&nbsp;</h3>
          </div>
          <div class="col-lg-2">
            <b-button>Agregar</b-button>
          </div>
        </div>
        <div class="row">
          <ag-grid-vue
            class="app-grid ag-theme-balham"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :rowSelection="rowSelection"
            @grid-ready="onGridReady"
            @selection-changed="onSelectionChanged" />
        </div>
      </div>
      <div class="col-lg-6 d-sm-none d-md-block">
        <div class="row">
          <div class="col-lg-10">
            <h3>Vista previa</h3>
          </div>
          <div class="col-lg-2">
            <b-button @click="onEditNew">Editar</b-button>
          </div>
        </div>
        <div class="row app-visor-post">
          <div class="col-lg-12">
            <div class="row"><Post :post="postSelected" /></div>
            <div class="row"><div v-html="postSelected.content"></div></div>
          </div>
        </div>
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
  beforeRouteEnter: (to, from, next) => {
    Promise.all([
      store.dispatch(FETCH_POSTS, { "_expand": "author"})
    ]).then(() => {
      next();
    });
  },
  data: () => ({
    rowSelection: "single",
    content: "<h1>Some initial content</h1>",
    postSelected: {
      "id": 1,
      "photo": "https://cloud/img.png",
      "content": "Content <h1>Title</h1>",
      "title": "Noticia  1",
      "category": "Finanzas",
      "authorId": 1,
      "created": "12/12/2020",
      "updated": "12/12/2020",
      "likes": 10,
      "numberOfComments": 34
    },
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
    },
    onSelectionChanged() {
      var selectedRows = this.gridApi.getSelectedRows();
      if(selectedRows.length === 1) {
        this.postSelected = selectedRows[0];
      } else {
        this.postSelected = {};
      }
      // document.querySelector("#selectedRows").innerHTML = selectedRows.length === 1 ? .athlete : "";
    },
    onEditNew() {
      this.$router.push({"name": "editorNoticia", "params": {"id": this.postSelected.id}})
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
