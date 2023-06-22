import { defineStore } from "pinia";

const useApiStore = defineStore("api", {
  state: () => ({
    loading: false,
    errors: {},
    isErrors: false,
  }),
  actions: {
    loadingStart() {
      this.loading = true;
    },
    loadingFinish() {
      this.loading = false;
    },
    loadErrors(errors) {
      this.isErrors = true;
      this.errors = errors;
    },
    removeErrors() {
      this.isErrors = false;
      this.errors = {};
    }
  },
});

export default useApiStore;
