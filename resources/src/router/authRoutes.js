import AuthLogin from '../pages/auth/Login.vue';
import AuthRegister from '../pages/auth/Register.vue';

const routes = [
  {
    path: "/login",
    name: "login",
    component: AuthLogin,
  },
  {
    path: "/register",
    name: "register",
    component: AuthRegister,
  },
];

export default routes;
