<script>
import { defineComponent } from 'vue'
import Navbar from "./components/shared/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  }
})
</script>

<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>
