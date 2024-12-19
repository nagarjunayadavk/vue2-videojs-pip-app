<template>
  <div id="app">
    <commonHead />
    <div class="pt-16">
      <Keep-alive :key="$route.fullPath">
        <router-view></router-view>
      </Keep-alive>
    </div>
  </div>
</template>

<script>
import { commonHead } from "@/components/index";

export default {
  name: "App",
  components: {
    commonHead
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background-color: #000;
}
.pt-16 {
  padding-top: 7px;
}

.video-js .vjs-big-play-button {
  border: none !important;
  background-color: transparent !important;
  border-radius: 0px !important;
}
</style>
