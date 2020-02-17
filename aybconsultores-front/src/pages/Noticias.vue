<template>
  <div class="container">
    <h1>Noticias</h1>
    <div class="row">
      <div class="col-lg-6">
        <ag-grid-vue
          class="ag-theme-balham"
          :columnDefs="columnDefs"
          :rowData="rowData"
          @grid-ready="onGridReady" />
      </div>
      <div class="col-lg-6">
        <vue-editor v-model="content" />
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: 'Noticias',
  components: { VueEditor, AgGridVue },
  props: {
    params: Object
  },
  data: () => ({
    content: "<h1>Some initial content</h1>",
    columnDefs: [
      {field: 'title', headerName: "Titulo"},
      {field: 'category', headerName: "Categoría"},
      {field: 'date', headerName: "Fecha"},
      {field: 'likes', headerName: "# Me Gusta"},
      {field: 'comments', headerName: "# Comentarios"}
    ]
  }),
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    }
  },
  computed: {
    rowData() {
      return [ {"title": "dd", "category": "Finanzas", "date": "12/02/2020 12:12:12", "likes": 2, "comments": 5} ]
    }
  }
}
</script>