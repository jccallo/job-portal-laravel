import { ref } from "vue";
import jobApplicantService from "../services/jobApplicantService";

const useJobApplicant = () => {
  const jobApplicants = ref([]);

  const getJobApplicants = async (id) => {
    await jobApplicantService.index(id).then((response) => {
        jobApplicants.value = response.data.data;
    });
  };

  return {
    getJobApplicants,
    jobApplicants,
  };
};

export default useJobApplicant;
