<script setup>
import { onMounted, ref } from "vue";
import useAuth from "../../composables/useAuth";

const { destroySession, getUserSession } = useAuth();

const userName = ref("");

const logout = async () => {
  await destroySession();
};

// onMounted
onMounted(async () => {
  userName.value = getUserSession().name;
});
</script>

<template>
  <!-- cabecera -->
  <div class="container-fluid bg-primary mb-4">
    <div class="container">

      <!-- navbar -->
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary py-3 px-0"><!--style="background-color: #242939;"-->

        <!-- Brand -->
        <a class="navbar-brand" href="index.html">
          <b>JOBPORTAL</b>
        </a>

        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-light mr-3" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bi bi-person-fill"></i> {{ userName }}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" style="cursor: pointer;">Mi perfil</a>
                <a class="dropdown-item" style="cursor: pointer;">Suscripciones</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" style="cursor: pointer;" @click.stop="logout">Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </div>

      </nav>

    </div>

  </div>
</template>
