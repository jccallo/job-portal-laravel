import apiService from "./apiService";

const fileService = {
  store(data) {
    return apiService.post("/files", data);
  },
};

export default fileService;
