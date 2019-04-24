<template>
  <div class="game">
    <div class="row">
      <div class="column top">
        <div>Game Round: {{gameRound}}</div>
        <div>Roll Round: {{rollRound}}</div>
      </div>
      <div class="column top">
        <div>
          <input type="checkbox" id="checkbox" v-model="showDesc">
          <label for="checkbox">Show Descriptions</label>
          <button class="skip-button" @click="nextRound">Skip Round</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="dicerow">
          <dice
            v-for="(dice, index) in dices"
            v-bind:key="index"
            v-on:dice-click="lockDice(index)"
            v-bind:dice="dice"
          ></dice>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="buttons">
        <button class="game-button" @click="roll">Roll</button>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <score-category
          v-for="(score, index) in upperScores"
          v-bind:key="index"
          v-on:score-click="selectUpperScore(index)"
          v-bind:score="score"
          v-bind:class="{ avoidclicks: rollRound==0 }"
          v-bind:showDesc="showDesc"
          v-bind:playerDices="dices"
          v-bind:rollRound="rollRound"
        ></score-category>
      </div>
      <div class="column">
        <score-category
          v-for="(score, index) in lowerScores"
          v-bind:key="index"
          v-on:score-click="selectLowerScore(index)"
          v-bind:score="score"
          v-bind:class="{ avoidclicks: rollRound==0 }"
          v-bind:showDesc="showDesc"
          v-bind:playerDices="dices"
          v-bind:rollRound="rollRound"
        ></score-category>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <score-category class="avoidclicks" v-bind:score="totalScore"></score-category>
      </div>
    </div>
  </div>
</template>

<script>
import Dice from './Dice.vue'
import ScoreCategory from './ScoreCategory.vue'
export default {
  name: 'Game',
  components: {
    Dice,
    ScoreCategory
  },
  computed: {
    dices: function () {
      return this.$store.state.dices
    },
    gameRound: function () {
      return this.$store.state.gameRound
    },
    rollRound: function () {
      return this.$store.state.rollRound
    },
    upperScores: function () {
      return this.$store.state.upperScores
    },
    lowerScores: function () {
      return this.$store.state.lowerScores
    },
    totalScore: function () {
      return this.$store.state.totalScore
    },
    showDesc: {
      set () {
        this.$store.commit('showDesc')
      },
      get () {
        return this.$store.state.showDesc
      }
    }
  },
  methods: {
    roll: function () {
      this.$store.dispatch('roll')
    },
    nextRound: function () {
      this.$store.dispatch('nextRound')
    },
    lockDice: function (index) {
      this.$store.dispatch('lockDice', index)
    },
    selectUpperScore: function (index) {
      this.$store.dispatch('selectUpperScore', index)
    },
    selectLowerScore: function (index) {
      this.$store.dispatch('selectLowerScore', index)
    }
  },
  created: function () {
    var self = this
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === 82) {
        self.roll()
      }
    })
  }
}

</script>

<style scoped>

.top {
  text-align: left;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;
  flex: 1;
}

.game-button {
  background-color: rgb(224, 161, 161);
  border: 0px;
  color: rgb(73, 73, 73);
  font-size: 1.5em;
  cursor: pointer;
  text-align: center;
  width: 300px;
  height: 50px;
  box-shadow: 0 6px #999;
  outline: none;
  border-radius: 4px;
}

.game-button:hover {
  background-color: rgb(219, 124, 124);
}

.game-button:active {
  background-color: rgb(219, 124, 124);
  box-shadow: 0 2px #999;
  transform: translateY(4px);
}

.skip-button {
  width: 100px;
  height: 20px;
  font-size: 1em;
  background-color: rgb(224, 161, 161);
  border: 0px;
  color: rgb(73, 73, 73);
  cursor: pointer;
  text-align: center;
  outline: none;
  margin-left: 20px;
}

.game {
  display: flex;
  flex-direction: column;
  margin-left: 0em;
  margin-right: 0em;
}

.dicerow {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1em;
}

.avoidclicks {
  pointer-events: none;
}
</style>
