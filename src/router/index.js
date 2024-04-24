// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import CasasDetailCarcavelos from "../views/CasasDetailCarcavelos.vue";
import CasasDetailSeteRios from "../views/CasasDetailSeteRios.vue";
import Contactar from "../views/Contactar.vue";
import ZonaInteresse from "../views/ZonasInteresse.vue";

const routes = [
  {
    path: "/inandout/",
    name: "Main",
    component: Main,
  },
  {
    path: "/inandout/In&Out-Carcavelos",
    name: "CasasDetail-Carcavelos",
    component: CasasDetailCarcavelos,
    // props: true,
  },
  {
    path: "/inandout/In&Out-SeteRios",
    name: "CasasDetail-SeteRios",
    component: CasasDetailSeteRios,
    // props: true,
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
