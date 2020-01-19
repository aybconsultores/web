import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/pages/Home")
    }, {
      name: "ordenes-de-trabajo",
      path: "/ordenes-de-trabajo",
      component: () => import("@/pages/OrdenTrabajo")
    }, {
      name: "tareas",
      path: "/tareas",
      component: () => import("@/pages/Tarea")
    }
  ]
})
