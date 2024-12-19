import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const Dashboard = () => import("../views/dashboard/dashboard.vue");
const Support = () => import("../views/support/support.vue");
const Faq = () => import("../views/faq/faq.vue");

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/support",
    name: "support",
    component: Support
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Global navigation guard to trigger PiP mode when navigating to /serviceNotice
router.beforeEach((to, from, next) => {
  if (to.name === "support") {
    // If video is playing, open PiP
    // If PiP was enabled globally, make sure it remains active
    if (store.state.player && store.state.isPiPEnabled) {
      console.log("PiP is enabled, keeping PiP window open.");

      store.state.player
        .requestPictureInPicture()
        .then(() => {
          store.state.player.play();
          // store.dispatch("enablePiP");
          // this.enablePiP(); // Update PiP state in Vuex
        })
        .catch(error => {
          console.error("Failed to enter PiP mode:", error);
        });
      // when only pip enabled
      store.state.player.on("leavepictureinpicture", () => {
        console.log("back to tab");
        // store.dispatch("disablePiP");
        // Optionally, you could navigate back or perform actions here
        router.push("/");
      });
    }

    next(); // If video isn't playing, continue with route navigation
  } else {
    next();
  }
});

// Export the router instance
export default router;
