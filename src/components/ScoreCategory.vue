<template>
  <div
    class="scorecategory"
    v-bind:class="{avoidclicks :hasDices||score.rule.nonInteractive,
    transparent:transparent}"
    v-on:click="$emit('score-click')"
    :style="backGround"
  >
    <div class="left">
      <div class="title">{{score.name}}</div>
      <div class="content">
        <div class="dicerow">
          <span class="desctext" v-if="showDesc && score.dices.length==0">{{score.description}}</span>
          <dice
            class="small-dice"
            v-for="(dice, index) in score.dices"
            v-bind:key="index"
            v-bind:dice="dice"
          ></dice>
        </div>
        <div class="points" v-if=" hasDices ||points>0">{{points}}</div>
        <div
          class="points"
          v-else-if="rollRound>0 && !score.rule.nonInteractive"
        >{{suggestedPoints}} / {{score.rule.maxPoints}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Dice from './Dice.vue'
export default {
  name: 'ScoreCategory',
  props: {
    score: Object,
    playerDices: Array,
    rollRound: Number,
    showDesc: Boolean,
    transparent: Boolean
  },
  computed: {
    points: function () {
      if (!this.score.dices) {
        return 0
      }
      return this.score.rule.points(this.score.dices)
    },
    suggestedPoints: function () {
      if (!this.score.rule) {
        return 0
      }
      return this.score.rule.points(this.playerDices)
    },
    hasDices: function () {
      return this.score.dices && this.score.dices.length > 0
    },
    backGround: function () {
      var bg = '#eee'
      if (!this.hasDices && this.rollRound > 0) {
        var res = this.suggestedPoints / this.score.rule.maxPoints
        if (res === 0) {
          bg = 'rgb(220, 100, 100)'
        } else if (res < 0.33) {
          bg = 'rgb(220, 160, 100)'
        } else if (res < 0.66) {
          bg = 'rgb(210, 210, 100)'
        } else if (res < 1) {
          bg = 'rgb(160, 220, 100)'
        } else {
          bg = 'rgb(100, 220, 100)'
        }
      }
      return {
        'background-color': bg
      }
    }
  },
  created: function () {
    var self = this
    document.addEventListener('keyup', function (event) {
      if (self.score.keyCode) {
        if (event.keyCode === self.score.keyCode) {
          self.$emit('score-click')
        }
      }
    })
  },
  components: {
    Dice
  }
}
</script>

<style scoped>
.scorecategory {
  background-color: #eee;
  width: 100%;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  cursor: pointer;
  margin-bottom: 4px;
  display: flex;
  transition: background-color 0.15s linear;
  -moz-user-select: none;
  -webkit-user-select: none;
  font-size: 0.8em;
}

.left {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.title {
  text-align: left;
  background-color: rgb(73, 73, 73);
  padding-left: 0.2em;
  color: rgb(233, 233, 233);
}

.content {
  display: flex;
  justify-content: space-between;
  margin: 0.1em;
}

.dicerow {
  display: flex;
  justify-content: center;
  flex: 1;
}

.points {
  margin-right: 8px;
  color: rgb(73, 73, 73);
  font-weight: bold;
}

.small-dice {
  height: 20px;
  width: 20px;
  margin-right: 0.2em;
}

.avoidclicks {
  pointer-events: none;
  cursor: default;
}

.transparent {
  background-color: transparent;
}

.desctext {
  text-align: left;
  font-size: 10px;
  line-height: 9px;
}

</style>
