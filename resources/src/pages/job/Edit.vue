<script setup>
import { onMounted, ref } from "vue";
import useJob from "../../composables/useJob";
import useJobApplicant from "../../composables/useJobApplicant";

const props = defineProps(["id"]);
const { getJob, job } = useJob();
const { getJobApplicants, jobApplicants } = useJobApplicant();

onMounted(async () => {
	await getJob(props.id);
	await getJobApplicants(props.id);
});
</script>

<template>
	<!-- titulo -->
	<div class="container">
		<div class="row align-items-center mb-2">
			<div class="col-6">
				<div class="h3">Trabajo <small class="text-muted" style="font-size: 16px; font-weight: 500;">Detalle</small></div>
			</div>
			<div class="col-6">
				<div class="form-row form-inline justify-content-end">
					<div class="col-auto my-1">
						<router-link class="btn btn-link" :to="{
              name: 'job-index'
            }">Volver al listado</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- large table -->
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="card mb-4">

					<!-- card body -->
					<div class="card-body">
						<div class="form-group">
							<label>Titulo:</label>
							<input type="text" class="form-control" v-model="job.titulo" readonly>
						</div>
						<div class="form-group">
							<label>Sueldo:</label>
							<input type="number" class="form-control" v-model="job.sueldo" readonly>
						</div>
						<div class="form-group">
							<label>Descripcion:</label>
							<textarea class="form-control" rows="15" v-model="job.descripcion" readonly></textarea>
						</div>

            <div class="form-group">
							Cantidad de Postulaciones: {{ jobApplicants.length }}
						</div>

            <div class="form-group">
							Postulantes:
              <ul>
                <li v-for="jobApplicant in jobApplicants" :key="jobApplicant.id">{{ jobApplicant.nombres }} {{ jobApplicant.apellidos }}</li>
              </ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
