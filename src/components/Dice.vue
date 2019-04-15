<template>
  <div class="dice" v-bind:class="{ avoidclicks: !dice.isInteractive }" v-on:click="$emit('dice-click')">
    <img :src="image" />
    <span v-if="dice.locked">locked</span>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  props: {
    dice: Object
  },
  computed: {
    image: function () {
      return require('@/assets/Dice-' + this.dice.side + '.svg')
    }
  }
}

</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}
.dice {
  height: 3em;
  width: 3em;
  /* background-color: #ffffff; */
  cursor: pointer;
}

.avoidclicks {
  pointer-events: none;
}
</style>
