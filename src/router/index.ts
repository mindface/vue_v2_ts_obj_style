import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/record",
    name: "Record",
    component: () => import("../views/Record.vue"),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/records/:id",
    name: "RecordsPage",
    component: () => import("../views/records/Index.vue"),
    meta: {
      requiresAuth: true
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !store.getters["user/getUserData"].uid) {
//     next({
//       path: "/login",
//     });
//   }

//   to.matched.some((record) => {
//     console.log(record);
//     if (to.name !== "Login" && !store.getters["user/getUserData"].uid) {
//       next({
//         path: "/login",
//         // query: {
//         //   redirect: to.fullPath,
//         // }
//       });
//     } else {
//       next();
//     }
//   });
// });

export default router;
