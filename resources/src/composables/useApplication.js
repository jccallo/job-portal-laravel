import userJobApplicationService from "../services/userJobApplicationService";
import fileService from "../services/fileService";

const useApplication = () => {

  const storeUserJobApplication = async (data, user_id, job_id) => {
    await userJobApplicationService.store(data, user_id, job_id).then((response) => {
        console.log("Postulacion guardada correctamente");
    });
    await fileService.store(data.archivo_cv).then((response) => {
        console.log("pdf guardada correctamente");
    });
  };

  return {
    storeUserJobApplication,
  };
};

export default useApplication;
