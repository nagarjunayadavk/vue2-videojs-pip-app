<template>
  <div>
    <v-toolbar dark fixed-bar class="fixed-bar base-header common-toolbar">
      <!-- Logo container on the left side -->
      <v-toolbar-title class="logo-contaner">
        <div>
          <img
            src="../assets/logo.png"
            alt="Desktop Header Logo"
            class="des-header"
            width="40px"
          />
        </div>
      </v-toolbar-title>

      <!-- Spacer to push content to the right -->
      <v-spacer></v-spacer>

      <!-- Navigation links for desktop view -->
      <v-row justify="end" no-gutters class="header-nav-items">
        <v-btn
          v-for="(link, ind) in links"
          :key="ind"
          class="mx-2 nav-list-items"
          @click="navHover(link)"
        >
          <template> {{ link.title }} </template>
          <!--  -->
        </v-btn>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "commonHead",
  data: () => ({
    drawer: false,
    links: [
      { title: "Dashboard", routeName: "/" },
      { title: "Support", routeName: "support" },
      { title: "FAQ", routeName: "faq" }
    ]
  }),
  computed: {},
  methods: {
    navHover(type) {
      this.hoveredItem = type.title;
      const activeLink = type.routeName;
      // console.log("limk", type.title, activeLink);
      // /serviceNotice', '/faq', '/support',
      switch (activeLink) {
        case "support":
          //window.open(
          this.$router.push("/support");
          //);
          break;
        case "dashboard":
          //window.open(
          this.$router.push("/");
          //);
          break;
        case "faq":
          this.$router.push("/faq");
          break;
        default:
          // go through
          this.$router.push("/");
          break;
      }
    }
  }
};
</script>
<style>
.common {
  color: red;
}

.common-header .v-toolbar__content {
  max-width: 1200px;
  margin: 0 auto;
}

.common-header .theme--dark.v-btn:hover::before,
.common-header .theme--dark.v-btn:focus::before {
  opacity: 0;
}

.common-header .theme--dark.v-btn:active {
  box-shadow: none;
}

.common-header .header-container {
  width: 1200px;
  width: 1200px !important;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

.logo-contaner .v-btn {
  text-transform: none;
  background-color: transparent !important;
}

.support-btn {
  text-transform: none;
  background-color: transparent !important;
  box-shadow: none;
}

.des-header {
  display: inline-block;
  cursor: pointer;
}

.mob-header {
  display: none;
}

.fixed-bar {
  background: #000 !important;
  left: 0;
  padding: 0rem 0rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.fixed-bar .header-nav-items .nav-list-items {
  background: none;
  box-shadow: none;
  text-transform: capitalize;
}

.v-btn-cust {
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 0.7rem !important;
  line-height: 1.6rem !important;
  text-transform: capitalize;
}

.v-btn--active {
  border-bottom: 2px solid red !important;
  color: #fff !important;
}

.v-tab--active .category-no-value {
  color: #fff;
}

.v-toolbar__content {
  justify-content: center;
}

@media screen and (max-width: 1240px) and (orientation: portrait) {
  /* .des-header {
    display: none;
  }
  .mob-header {
    display: inline-block;
  } */
  .common-header .v-toolbar__content {
    width: 360px;
  }

  .common-header .common-toolbar .v-navigation-drawer {
    width: 304px !important;
  }

  .common-header .common-toolbar .close-btn .v-icon {
    height: 40px !important;
    font-size: 40px !important;
    width: 40px !important;
  }
}

@media screen and (max-width: 1240px) and (orientation: landscape) {
  /* .des-header {
    display: none;
  }
  .mob-header {
    display: inline-block;
  } */
  .common-header .v-toolbar__content {
    width: 800px;
  }
}
</style>
