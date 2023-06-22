<script setup>
import { onMounted, ref } from "vue";
import useJob from "../../composables/useJob";
import useAuth from "../../composables/useAuth";
import useApplication from "../../composables/useApplication";

const { storeJob, getJobs, jobs, pagination } = useJob();
const { storeUserJobApplication } = useApplication();
const { getUserSession } = useAuth();

const trabajoData = ref({});
const file = ref(null);
const applicationData = ref({});
const userIdData = ref("");
const jobIdData = ref("");

const setApplicationData = (job_id) => {
  userIdData.value = getUserSession().id;
  jobIdData.value = job_id;
}

const store = async () => {
  await storeJob(trabajoData.value);
}

const goToUrl = async (url) => {
  const page = new URLSearchParams(new URL(url).search).get("page")
  await getJobs(page);
}

const uploadFile = (event) => {
  applicationData.value.archivo_cv = event.target.files[0];
  console.log(file.value);
}

const save = async () => {
  console.log(applicationData.value);
  console.log(userIdData.value);
  console.log(jobIdData.value);
  await storeUserJobApplication(applicationData.value, userIdData.value, jobIdData.value);
  // const formData = new FormData();
  // formData.append('file', file.value);
}

onMounted(async () => {
  await getJobs();
});
</script>

<template>
  <!-- titulo -->
  <div class="container">
    <div class="row align-items-center mb-2">
      <div class="col-6">
        <div class="h3">Trabajos <small class="text-muted" style="font-size: 16px; font-weight: 500;">Mostrando {{
          jobs.length }}
            resultados en Total</small></div>
      </div>
      <div class="col-6">
        <div class="form-row form-inline justify-content-end">
          <div class="col-auto my-1">
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- large table -->
  <div class="container">
    <div class="row">
      <div class="col">
        <template v-if="true">
          <div class="card border-light mb-3" v-for="job in jobs" :key="job.id">
            <div class="card-body">
              <h4 class="card-title">{{ job.titulo }}</h4>
              <p class="card-text"><b>Sueldo:</b> S/. {{ job.sueldo }}</p>
              <p class="card-text">{{ job.descripcion }}</p>
              <button href="#" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#postulacion"
                @click="setApplicationData(job.id)">Postular</button>
            </div>
          </div>
          <ul class="pagination">
            <li class="page-item" :class="{ active: page.active, disabled: page.url == null }"
              v-for="(page, index) in pagination" :key="index">
              <a class="page-link" @click.stop="goToUrl(page.url)"><span v-html="page.label"></span></a>
            </li>
          </ul>
        </template>

        <div class="card mb-4">

          <!-- card body -->
          <div class="card-body table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col" style="border-top: 0;">#</th>
                  <th scope="col" style="border-top: 0;">Titulo</th>
                  <th scope="col" style="border-top: 0;">Descripcion</th>
                  <th scope="col" style="border-top: 0;">Sueldo</th>
                  <th scope="col" style="border-top: 0;" class="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="job in jobs" :key="job.id">
                  <th>{{ job.id }}</th>
                  <td>{{ job.titulo }}</td>
                  <td>{{ job.descripcion }}</td>
                  <td>{{ job.sueldo }}</td>
                  <td class="text-right">
                    <router-link class="btn btn-dark btn-sm mr-1" :to="{
                      name: 'job-edit',
                      params: { id: job.id },
                    }">Detalles
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <ul class="pagination">
                <li class="page-item" :class="{ active: page.active, disabled: page.url == null }"
                  v-for="(page, index) in pagination" :key="index">
                  <a class="page-link" @click.stop="goToUrl(page.url)"><span v-html="page.label"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- The Modal -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Registrar trabajo</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="form-group">
            <label>Titulo:</label>
            <input type="text" class="form-control" v-model="trabajoData.titulo">
          </div>
          <div class="form-group">
            <label>Sueldo:</label>
            <input type="number" class="form-control" v-model="trabajoData.sueldo">
          </div>
          <div class="form-group">
            <label>Comment:</label>
            <textarea class="form-control" rows="15" v-model="trabajoData.descripcion"></textarea>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="myBtn" @click="store">Guardar</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
        </div>

      </div>
    </div>
  </div>

  <!-- postulacion -->
  <div class="modal fade" id="postulacion">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Postulacion de trabajo</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Archivo CV:</label>
            <input type="file" class="form-control-file border" @change="uploadFile">
          </div>
          <div class="form-group">
            <label>Mensaje:</label>
            <textarea class="form-control" rows="15" v-model="applicationData.mensaje"></textarea>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="save">Enviar</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        </div>

      </div>
    </div>
  </div>
</template>
