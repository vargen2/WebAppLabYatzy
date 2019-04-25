<template>
  <div
    class="dice"
    v-bind:class="{ avoidclicks: !dice.isInteractive,locked: dice.locked }"
    v-on:click="diceClick"
  >
    <img :src="image">
    <span v-if="dice.locked">locked</span>
  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from 'timers'
export default {
  name: 'GameDice',
  props: {
    dice: Object,
    offSetX: Number,
    offSetY: Number
  },
  data: function () {
    return { side: 2, posX: 0, posY: 0, rolling: false }
  },
  computed: {
    image: function () {
      return require('@/assets/Dice-' + this.compSide + '.svg')
    },
    compSide: function () {
      return this.rolling ? this.side : this.dice.side
    }
  },
  methods: {
    diceClick: function () {
      this.$emit('dice-click')
      this.startRoll()
    },
    startRoll: function () {
      this.rolling = true
      var rollIntervall = setInterval(
        (this.side = Math.floor(Math.random() * 5) + 1),
        500
      )
      setTimeout(() => {
        this.rolling = false
        clearInterval(rollIntervall)
      }, 3000)
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
  line-height: 1em;
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
