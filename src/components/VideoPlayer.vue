<template>
  <div>
    <video
      ref="videoPlayer"
      class="video-js vjs-default-skin"
      preload="auto"
      width="640"
      height="360"
    ></video>
  </div>
</template>

<script>
import videojs from "../plugins/video.js/dist/video.js";
import "video.js/dist/video-js.css";

export default {
  name: "VideoPlayer",
  data() {
    return {
      player: null,
      videoSrc:
        "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    };
  },
  mounted() {
    this.initPlayer();
  },
  methods: {
    enablePiP() {
      this.$store.dispatch("enablePiP");
    },
    disablePiP() {
      this.$store.dispatch("disablePiP");
    },
    initPlayer() {
      this.player = this.$store.state.player
        ? this.$store.state.player
        : videojs(this.$refs.videoPlayer, {
            autoplay: false,
            controls: true,
            sources: [
              {
                type: "application/x-mpegURL",
                src: this.videoSrc,
              },
            ],
          });

      // Trigger PiP when the video starts playing
      this.player.on("play", this.handlePlay);
      this.player.on("pause", this.handlePause);
      // this.$store.dispatch("plyer", null);
    },

    handlePlay() {
      console.log("state---", this.$store.state.isPiPEnabled);
      // this.enterPiP();
      // Enable PiP when the video starts playing
      // if (!this.$store.state.isPiPEnabled) {
      console.log("Enable PIP--");
      // this.enterPiP();
      this.enablePiP();
      //const videoElement = this.$refs.videoPlayer;
      this.$store.dispatch("player", this.player);
      // }
    },

    handlePause() {
      // console.log("Disable PIP--");
      this.disablePiP();
    },

    enterPiP() {
      const videoElement = this.$refs.videoPlayer;
      this.$store.dispatch("player", this.player);
      if (
        document.pictureInPictureEnabled &&
        !videoElement.disablePictureInPicture
      ) {
        videoElement
          .requestPictureInPicture()
          .then(() => {
            this.enablePiP(); // Update PiP state in Vuex
          })
          .catch((error) => {
            console.error("Failed to enter PiP mode:", error);
          });
      }
    },

    exitPiP() {
      const videoElement = this.$refs.videoPlayer;
      if (document.pictureInPictureElement === videoElement) {
        document
          .exitPictureInPicture()
          .then(() => {
            this.disablePiP(); // Update Vuex PiP state when exiting PiP
          })
          .catch((error) => {
            console.error("Failed to exit PiP mode:", error);
          });
      }
    },
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
