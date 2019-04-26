<template>
  <div
    class="gamedice"
    v-bind:class="{ avoidclicks: !dice.isInteractive,locked: dice.locked,hidden:rollRound==0}"
    v-on:click="$emit('dice-click')"
    :style="{left:startposx+ 'px',bottom:startposy+ 'px'}"
  >
    <img :src="image" >
    <span v-if="dice.locked">locked</span>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'GameDice',
  props: {
    dice: Object,
    offsetx: Number,
    offsety: Number
  },
  data: function () {
    return { side: 2, posX: 0, posY: 0, rollIntervall: null }
  },
  computed: {
    image: function () {
      return require('@/assets/Dice-' + this.compSide + '.svg')
    },
    compSide: function () {
      return this.rolling && !this.dice.locked ? this.side : this.dice.side
    },
    rolling: function () {
      this.startRoll()
      return this.$store.state.rolling
    },
    rollRound: function () {
      return this.$store.state.rollRound
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
      if (this.$store.state.rolling) {
        this.rollIntervall = setInterval(() => {
          this.side = Math.floor(Math.random() * 5) + 1
        }, 100)
        setTimeout(this.asdf, 500)
      }
    },
    asdf: function () {
      window.clearInterval(this.rollIntervall)
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
  height: 100px;
  width: 100px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.76);
  border-radius: 15px;
  text-align: center;
  /* transition: all 0.1s ease; */
}

.locked {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.76);
  transform: translateY(2px);
}

.avoidclicks {
  pointer-events: none;
}

.hidden{
  opacity: 0;
}

</style>
