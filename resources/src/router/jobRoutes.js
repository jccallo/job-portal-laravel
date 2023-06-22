import JobIndex from "../pages/job/Index.vue";
import JobEdit from "../pages/job/Edit.vue";

const routes = [
  {
    path: "",
    name: "job-index",
    component: JobIndex,
  },
  {
    path: "jobs/:id/edit",
    name: "job-edit",
    component: JobEdit,
    props: true,
  },
];

export default routes;
