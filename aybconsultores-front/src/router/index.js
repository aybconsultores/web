import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "inicio",
      path: "/",
      component: () => import("@/pages/Inicio")
    }, {
      name: "quienes-somos",
      path: "/quienes-somos",
      component: () => import("@/pages/QuienesSomos")
    }, {
      name: "servicios-de-asesoria",
      path: "/servicios-de-asesoria",
      component: () => import("@/pages/ServiciosAsesoria")
    }, {
      name: "contactanos",
      path: "/contactanos",
      component: () => import("@/pages/Contactanos")
    }, {
      name: "noticias",
      path: "/admin/noticias",
      component: () => import("@/pages/Noticias")
    }
  ]
})
