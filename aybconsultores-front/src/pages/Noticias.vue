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
        <div v-html="content" />
      </div>
    </div>
  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: 'Noticias',
  components: { AgGridVue },
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
    ],
    rowData: [ {"title": "dd", "category": "Finanzas", "date": "12/02/2020 12:12:12", "likes": 2, "comments": 5} ]
  }),
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    }
  }
}
</script>
