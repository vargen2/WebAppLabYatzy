<template>
  <div class="game">
    <div class="row">
      <div class="column">
        <div>Game Round: {{gameRound}}</div>
        <div>Roll Round: {{rollRound}}</div>
      </div>
      <div class="column">
        <div>
          <input type="checkbox" id="checkbox" v-model="showDesc">
          <label for="checkbox">Show descriptions</label>
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
      <div class="column">
        <button class="roll-button" @click="roll">Roll</button>
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
    lockDice: function (index) {
      this.$store.dispatch('lockDice', index)
    },
    selectUpperScore: function (index) {
      this.$store.dispatch('selectUpperScore', index)
    },
    selectLowerScore: function (index) {
      this.$store.dispatch('selectLowerScore', index)
    }
  }
}

</script>

<style scoped>
.roll-button {
  background-color: rgb(160, 199, 155);
  border: 0px;
  border-top: 4px solid rgb(73, 73, 73);
  font-size: 1.5em;
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
