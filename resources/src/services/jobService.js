import apiService from "./apiService";

const jobService = {
  index(page) {
    return apiService.get(`/jobs?page=${page}`);
  },
  show(id) {
    return apiService.get(`/jobs/${id}`);
  },
  store(data) {
    return apiService.post("/jobs", data);
  },
  update(data, id) {
    return apiService.put(`/jobs/${id}`, data);
  },
  destroy(id) {
    return apiService.delete(`/jobs/${id}`);
  },
};

export default jobService;
