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
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="dicerow">
          <div v-if="rollRound!=0">
            <dice
              v-for="(dice, index) in dices"
              v-bind:key="index"
              v-on:dice-click="lockDice(index)"
              v-bind:dice="dice"
            ></dice>
          </div>
          <button class="skip-button" @click="nextRound">Skip Round</button>
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
      this.$store.commit('roll')
    },
    nextRound: function () {
      this.$store.commit('nextRound')
    },
    lockDice: function (index) {
      this.$store.commit('lockDice', index)
    },
    selectUpperScore: function (index) {
      this.$store.commit('selectUpperScore', index)
    },
    selectLowerScore: function (index) {
      this.$store.commit('selectLowerScore', index)
    }
  },
  created: function () {
    this.$store.commit('initGame')
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
html,
body {
  height: auto;
}

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

button {
  background-color: rgb(224, 161, 161);
  color: rgb(73, 73, 73);
  box-shadow: 0 4px rgb(124, 89, 89);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  border: 2px solid rgb(226, 190, 190);
}

button:hover {
  background-color: rgb(219, 124, 124);
}

button:active {
  background-color: rgb(219, 124, 124);
  box-shadow: 0 2px rgb(124, 89, 89);
  transform: translateY(2px);
}

.game-button {
  font-size: 1.5em;
  width: 300px;
  height: 50px;
  outline: none;
}

.skip-button {
  width: 100px;
  height: 3em;
  font-size: 1em;
  margin-left: 20px;
  outline: none;
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
  background-color: #8bc990;
  padding: 26px;
}

.avoidclicks {
  pointer-events: none;
}
</style>
