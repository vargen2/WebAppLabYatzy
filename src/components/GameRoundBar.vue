<template>
  <div class="gameroundbar">
    <game-round-bar-box v-for="index in maxRounds" :key="index" v-bind:filled="index<=currentRound"></game-round-bar-box>
  </div>
</template>

<script>
import GameRoundBarBox from './GameRoundBarBox.vue'
export default {
  name: 'GameRoundBar',
  props: {
    currentRound: Number,
    maxRounds: Number
  },
  components: {
    GameRoundBarBox
  }
}
</script>

<style>

.gameroundbar {
    display: flex;
  flex-direction: row;
  flex-basis: 100%;
}

</style>
