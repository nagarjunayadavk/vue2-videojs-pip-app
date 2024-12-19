<template>
  <div class="support-page">
    <div>Hello Support</div>
  </div>
</template>

<script>
export default {
  name: "support",
  beforeRouteEnter(to, from, next) {
    // Called before entering the route
    console.log("Entering route", to);

    next();
  },
  mounted() {
    console.log("support store ", this.$store.state);
    // this.onPipInit();
  },
  methods: {
    onPipInit() {
      // If PiP was enabled globally, make sure it remains active
      if (this.$store.state.isPiPEnabled) {
        console.log("PiP is enabled, keeping PiP window open.");

        this.$store.state.player
          .requestPictureInPicture()
          .then(() => {
            // this.$store.state.player.play();
            this.$store.dispatch("enablePiP");
            // this.enablePiP(); // Update PiP state in Vuex
          })
          .catch(error => {
            console.error("Failed to enter PiP mode:", error);
          });
      }
      this.$store.state.player.on("leavepictureinpicture", this.onPiPExit);
    },
    onPiPExit() {
      console.log("Exited PiP");
      this.$store.dispatch("disablePiP");
      // Optionally, you could navigate back or perform actions here
      this.$router.push("/"); // Navigates back to the live page
    }
  }
};
</script>

<style lang="scss">
.support-page {
  color: orange;
}
</style>
