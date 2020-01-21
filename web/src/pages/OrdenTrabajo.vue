<template>
  <div>
    <h1>OrdenTrabajo</h1>
    <b-table 
      id="data-table"
      hover 
      :items="dataTable.items" 
      :fields="dataTable.fields"
      :per-page="dataTable.perPage"
      :current-page="dataTable.currentPage" />
    <b-pagination
      v-model="dataTable.currentPage"
      :total-rows="dataTable.rows"
      :per-page="dataTable.perPage"
      aria-controls="data-table" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store";
import { FETCH_MVPS } from "../store/actions.type";

export default {
  name: 'OrdenTrabajo',
  props: {
    params: Object
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_MVPS, { "_expand": "project"})
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["mvps"]),
    dataTable() {
      const mvps = this.mvps;
      return {
        perPage: 10,
        rows: 1,
        currentPage: 1,
        fields: [
          {key: 'project.code', label: "Cód. Proyecto"}, 'project.name', 'id', 'code', 'name'
        ],
        items: [ ...mvps ]
      }
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
