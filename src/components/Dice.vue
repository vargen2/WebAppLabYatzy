<template>
  <div
    class="dice"
    v-bind:class="{ avoidclicks: !dice.isInteractive,locked: dice.locked }"
    v-on:click="$emit('dice-click')"
  >
    <img :src="image">
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
  line-height: 1.0em;
  height: 3em;
  width: 3em;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.76);
  border-radius: 6px;
}

.locked {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.76);
  transform: translateY(2px);
}

.avoidclicks {
  pointer-events: none;
}
</style>
