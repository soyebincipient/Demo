<template>
  <div>
    <div>
      <b-sidebar
        id="sidebar-footer"
        aria-label="Sidebar with custom footer"
        no-header
        backdrop
        shadow
      >
        <div class="px-3 py-2">
          <b>
           DEMO
          </b><hr>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active>Home</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
    </div>
    <div>
      <!-- <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button> -->
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        backdrop
        shadow
        right
      >
        <template>
          <div class="p-3">
            <b-card no-bod class="card-profile">
              <b-row class="justify-content-center">
                <b-col lg="3" class="order-lg-2">
                  <div class="card-profile-image">
                    <a href="javascript:;">
                      <b-img
                        :src="getProfile.image_url"
                        height="100"
                        width="100"
                        rounded="circle"
                      />
                    </a>
                  </div>
                </b-col>
              </b-row>
              <b-card-header
                class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
              >
              </b-card-header>
              <b-card-body class="pt-0">
                <b-row>
                  <b-col>
                    <div
                      class="card-profile-stats d-flex justify-content-center"
                    ></div>
                  </b-col>
                </b-row>
                <div class="text-center">
                  <h5 class="h3">
                    {{ getProfile.name }}
                    <span class="font-weight-light">, 27</span>
                  </h5>
                  <div class="h5 font-weight-300">
                    <i class="ni location_pin mr-2"></i>{{ getProfile.email }}
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </template>
      </b-sidebar>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <align-left-icon
          size="1.5x"
          v-b-toggle.sidebar-footer
          class="custom-class"
        ></align-left-icon>
        <a class="navbar-brand" href="#">Demo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <img
                :src="getProfile.image_url"
                alt=""
                border="0"
                height="50"
                width="65"
                style="max-width: 130px"
              />
              <b-dropdown right :text="getProfile.email">
                <b-dropdown-item v-b-toggle.sidebar-no-header
                  >Profile</b-dropdown-item
                >
                <b-dropdown-item @click="logout()">Sign out</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Charts></Charts>
  </div>
</template>

<script>
import { AlignLeftIcon } from "vue-feather-icons";
import Charts from "./Charts.vue"
export default {
  components: { AlignLeftIcon, Charts },
  computed: {
    getProfile() {
      return this.$store.getters["auth/profileData"];
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped>
.ml-auto {
  left: auto !important;
  right: 0px;
}
</style>