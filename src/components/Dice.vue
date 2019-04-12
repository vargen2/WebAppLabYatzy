<template>
  <div class="dice" v-bind:class="{ avoidclicks: !dice.isInteractive }" v-on:click="$emit('dice-click')">
    {{dice.side}}
    <span v-if="dice.locked">locked</span>
  </div>
</template>

<script>
export default {
  name: "Dice",
  props: {
    dice: Object
  }
};
</script>

<style scoped>
.dice {
  height: 3em;
  width: 3em;
  background-color: #42b983;
  cursor: pointer;
}

.avoidclicks {
  pointer-events: none;
}
</style>
