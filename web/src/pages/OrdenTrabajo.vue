<template>
  <div>
    <h1>OrdenTrabajo</h1>
    <ag-grid-vue
      class="app-grid ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store";
import { FETCH_MVPS } from "../store/actions.type";
import {AgGridVue} from "ag-grid-vue";

export default {
  name: 'OrdenTrabajo',
  props: {
    params: Object
  },
  data() {
    return {
      columnDefs: [
        {checkboxSelection: true},
        {field: 'project.code', headerName: "Cód. Proyecto"},
        {field: 'project.name', headerName: "Proyecto"},
        {field: 'code', headerName: "Cód. MVP"},
        {field: 'name', headerName: "MVP"}
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_MVPS, { "_expand": "project"})
    ]).then(() => {
      next();
    });
  },
  components: {
    AgGridVue
  },
  computed: {
    ...mapGetters(["mvps"]),
    rowData() {
      return [ ...this.mvps ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
