<template>
  <div id="app">
    <game></game>
  </div>
</template>

<script>
import Game from "./components/Game.vue";

export default {
  name: "app",
  components: {
    Game
  },
  created: function() {
    this.$store.commit("initGame");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
