import { createRouter, createWebHistory } from "vue-router";

import Home from "../Home.vue";

import authRoutes from './authRoutes';
import JobRoutes from './jobRoutes';
import AuthRegister from '../pages/auth/Register.vue';

const routes = [
  {
    path: "/home",
    component: Home,
    children: [
      ...JobRoutes,
    ],
    meta: { requiresAuth: true }
  },
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

// agregamos el guard de navegación a nivel de router
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) { // verificamos si la ruta requiere autenticación y si el usuario está autenticado
    next('/login') // si el usuario no está autenticado, redirigimos a la página de inicio de sesión
  } else {
    next() // en caso contrario, permitimos el acceso a la ruta
  }
});

function isLoggedIn() {
  // verificamos si hay un token de autenticación en localStorage
  return localStorage.getItem('token') !== null;
}

export default router;
