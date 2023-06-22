import apiService from "./apiService";

const authService = {
  store(data) {
    return apiService.post("/login", data);
  },
  destroy() {
    return apiService.post(`/logout`);
  },
  save(data) {
    return apiService.post(`/register`, data);
  }
};

export default authService;
