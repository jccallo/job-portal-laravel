import apiService from "./apiService";

const userJobApplicationService = {
  store(data, user_id, job_id) {
    return apiService.post(`/users/${user_id}/jobs/${job_id}/applications`, data);
  },
};

export default userJobApplicationService;
