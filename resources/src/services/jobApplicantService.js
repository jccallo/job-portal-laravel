import apiService from "./apiService";

const jobApplicantService = {
  index(id) {
    return apiService.get(`/jobs/${id}/applicants`);
  },
};

export default jobApplicantService;
