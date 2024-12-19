<template>
  <div class="dashboard-page">
    <VideoPlayer />
  </div>
</template>

<script>
import { VideoPlayer } from "@/components/index";
export default {
  name: "Dashoard",
  components: {
    // HelloWorld,
    VideoPlayer
  }
};
</script>

<style lang="scss">
.dashboard-page {
  color: orange;
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 10px;
  background-color: #2e2e2e;
}

/* Container for dashboard area */
.dashboard_area {
  background: #2e2e2e;
  max-height: 560px; /* Adjust height as needed calc(100vh - 7.3rem) */
  overflow: hidden;
  position: relative;
  /* Adjust width to fit in the layout calc(100% - 27rem);*/
}

.video-js.vjs-16-9,
.video-js.vjs-fluid {
  width: 100%; /* Video will fill the container width */
  height: 100%; /* Video will fill the container height */
  object-fit: cover; /* Ensures the video covers the area, cropping if necessary */
}

/* Optional: Center the video container */
.video_wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-js {
  display: block;
  vertical-align: top;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  position: relative;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  word-break: initial;
}
.video-js:-moz-full-screen {
  position: absolute;
}
.video-js:-webkit-full-screen {
  width: 100% !important;
  height: 100% !important;
}

.vjs_video_3-dimensions {
  margin: 0 auto;
}

/*  play btn*/

.vjs-big-play-centered .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.81666em;
  margin-left: -1.5em;
}

.video-js:hover .vjs-big-play-button,
.video-js .vjs-big-play-button:focus {
  border-color: none;
  background-color: none;
  background-color: none;
  transition: all 0s;
}

.vjs-controls-disabled .vjs-big-play-button,
.vjs-has-started .vjs-big-play-button,
.vjs-using-native-controls .vjs-big-play-button,
.vjs-error .vjs-big-play-button {
  display: none;
}

.vjs-icon-play:before,
.video-js .vjs-play-control .vjs-icon-placeholder:before,
.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  content: "play";
  color: transparent;
  background-position: center center;
  background-image: url("../../assets/ic_half_play@3x.png");
  background-size: contain;
}
</style>
