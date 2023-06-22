import { ref } from "vue";
import jobService from "../services/jobService";
import { Job } from "../interfaces/job";
import { deleteIdAttribute, toastSuccess } from "../helpers/apiHelper";

const useJob = () => {
  const jobs = ref([]);
  const job = ref({ ...Job });
  const pagination = ref([]);

  const getJobs = async (page = 0) => {
    await jobService.index(page).then((response) => {
      jobs.value = response.data.data;
      pagination.value = response.data.meta.links;
    });
  };

  const getJob = async (id) => {
    await jobService.show(id).then((response) => {
      job.value = response.data.data;
    });
  };

  const storeJob = async (data) => {
    await jobService.store(data).then(() => {
      toastSuccess("Cargo creado correctamente.", "¡Exito!");
    });
  };

  const updateJob = async (data, id) => {
    const fixedData = deleteIdAttribute(data);
    await jobService.update(fixedData, id).then(() => {
      toastSuccess("Cargo editado correctamente.", "¡Exito!");
    });
  };

  const destroyJob = async (id) => {
    if (confirm('¿Esta seguro de eliminar?') == true) {
      await jobService.destroy(id).then(() => {
        toastSuccess("Cargo Eliminado correctamente.", "¡Exito!");
      });
    }
  };

  return {
    jobs,
    job,
    getJobs,
    getJob,
    storeJob,
    updateJob,
    destroyJob,
    pagination,
  };
};

export default useJob;
