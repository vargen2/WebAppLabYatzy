// TODO flytta game till views och se om jag kan göra components helt DRY

<template>
  <div class="game">
    <div class="row">
      <div class="column top">
        <div>Game Round: {{gameRound}}</div>
        <div>Roll Round: {{rollRound}}</div>
      </div>
      <div class="column top">
        <div>
          Descriptions <toggle-button color="#8bc990" font-size="14" v-model="showDesc" :labels="true"/>
        </div>
      </div>
    </div>

    <div class="row green">
      <div class="column">
        <score-category class="avoidclicks" v-bind:score="totalScore" :transparent="true"></score-category>
        <h1 class="floating" v-show="gameRound==15">GAME FINISHED, CONGRATULATIONS!</h1>
        <div class="dicerow">
          <game-dice
            v-for="(dice, index) in dices"
            v-bind:key="index"
            v-on:dice-click="lockDice(index)"
            v-bind:dice="dice"
            v-bind:offsetx="index"
          ></game-dice>
        </div>
        <div class="buttons">
          <button class="game-button" @click="roll">
            Roll
            <span v-show="showDesc">(Key R)</span>
          </button>
          <button class="skip-button" @click="nextRound">
            Skip Round
            <span v-show="showDesc">(Key T)</span>
          </button>
        </div>
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
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import GameDice from './GameDice.vue'
import ScoreCategory from './ScoreCategory.vue'

export default {
  name: 'Game',
  components: {
    GameDice,
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
    let self = this
    document.addEventListener('keyup', function (event) {
      if (event.keyCode === 82) {
        self.roll()
      } else if (event.keyCode === 84) {
        self.nextRound()
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
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  width: 350px;
  height: 50px;
  outline: none;
  margin-bottom: 15px;
}

.skip-button {
  /* float: right; */
  width: 180px;
  height: 50px;
  font-size: 1em;
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
  justify-content: space-between;
  padding: 26px;
}

.green {
  background-color: #8bc990;
}

.avoidclicks {
  pointer-events: none;
}

.floating {
  position: absolute;
}
</style>
