// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import CasasDetail from "../views/CasasDetail.vue";
import Contactar from "../views/Contactar.vue";
import ZonaInteresse from "../views/ZonasInteresse.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/casa/:id",
    name: "CasasDetail",
    component: CasasDetail,
    props: true,
  },
  {
    path: "/contactar",
    name: "Contactar",
    component: Contactar,
  },
  {
    path: "/PontosDeInteresse",
    name: "ZonaInteresse",
    component: ZonaInteresse,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
