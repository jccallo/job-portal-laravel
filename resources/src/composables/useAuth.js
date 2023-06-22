import { useRouter } from "vue-router";
import authService from "../services/authService";

const useAuth = () => {
  const router = useRouter();

  const getSession = () => {
    let token = localStorage.getItem('token');
    if (token) {
      router.push({ name: "job-index" });
    }
  };

  const getUserSession = () => {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  };

  const storeSession = async (data) => {
    await authService.store(data).then((response) => {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      router.push({ name: "navbar" });
    });
  };

  const destroySession = async () => {
    if (confirm("¿Esta seguro de salir?") == true) {
      await authService.destroy().then((response) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push({ name: "login" });
      });
    }
  };

  const saveUser = async (data) => {
    await authService.save(data).then((response) => {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      router.push({ name: "navbar" });
    });
  };

  return {
    getSession,
    getUserSession,
    storeSession,
    destroySession,
    saveUser,
  };
};

export default useAuth;
