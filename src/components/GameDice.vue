<template>
  <div
    class="gamedice"
    v-bind:class="{ avoidclicks: !dice.isInteractive,locked: dice.locked,hidden:rollRound==0}"
    v-on:click="$emit('dice-click')"
    :style="{left:startposx+ 'px',bottom:startposy+ 'px'}"
  >
    <img :src="image">
    <span v-if="dice.locked">Locked</span>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'GameDice',
  props: {
    dice: Object,
    offsetx: Number,
    offsety: Number,
    rolling: Boolean,
    rollRound: Number
  },
  data: function () {
    return { side: 2, posX: 0, posY: 0, rollIntervall: null }
  },
  computed: {
    image: function () {
      return require('@/assets/Dice-' + this.compSide + '.svg')
    },
    compSide: function () {
      return this.diceRolling && !this.dice.locked ? this.side : this.dice.side
    },
    diceRolling: function () {
      this.startRoll()
      return this.rolling
    },
    startposx: function () {
      return parseInt(this.offsetx) * 70 + 150
    },
    startposy: function () {
      return 10 + this.posY
    }
  },
  methods: {
    startRoll: function () {
      if (this.rolling) {
        this.rollIntervall = setInterval(() => {
          this.side = Math.floor(Math.random() * 5) + 1
        }, 100)
        var self = this
        setTimeout(() => window.clearInterval(self.rollIntervall), 500)
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.gamedice {
  line-height: 1em;
  height: 40px;
  width: 40px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.76);
  border-radius: 5px;
  text-align: center;
  transition: all 0.15s ease-out;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.locked {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.76);
  transform: scale(0.95);
}

.avoidclicks {
  pointer-events: none;
}

.hidden {
  opacity: 0;
}

@media screen and (min-width: 550px) {
  .gamedice {
    height: 90px;
    width: 90px;
    border-radius: 15px;
  }

  .gamedice:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.76);
  }
}
</style>
