<template>
  <div>
    <h1>OrdenTrabajo</h1>
    {{ projectWithMpvs }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store";
import { FETCH_PROJECTS, FETCH_MVPS } from "../store/actions.type";

export default {
  name: 'OrdenTrabajo',
  props: {
    params: Object
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_PROJECTS, {}),
      store.dispatch(FETCH_MVPS, {})
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["projects", "mvps"]),
    projectWithMpvs() {
      const projects = this.projects;
      return this.mvps.map(e1 => {
        const project = projects.filter(e2 => e2.id === e1.proyecto);
        let mvp = { ...e1 };
        mvp.proyecto = { ...project[0] };
        return mvp;
      })
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
