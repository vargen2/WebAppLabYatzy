<template>
  <div class="game">
    <game-round-bar v-bind:currentRound="gameRound" v-bind:maxRounds="15"></game-round-bar>
    <div class="row green">
      <div class="column">
        <div class="totalPoints">Total Points: {{totalPoints}} / {{maxPoints}}</div>
        <h4 class="floating" v-show="gameRound==maxGameRound">GAME FINISHED!<br>Refresh to start new game</h4>
        <div class="dicerow">
          <game-dice
            v-for="(dice, index) in dices"
            v-bind:key="index"
            v-on:dice-click="lockDice(index)"
            v-bind:dice="dice"
            v-bind:offsetx="index"
            v-bind:rolling="rolling"
            v-bind:rollRound="rollRound"
          ></game-dice>
        </div>
        <div class="buttons">
          <roll-button :showDesc="showDesc" :rollRound="rollRound" v-on:roll="roll"/>
        </div>
      </div>
    </div>
    <div class="row scoreCategories">
      <div class="columnNoWrap">
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
      <div class="space"></div>
      <div class="columnNoWrap">
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
        <div>
          Descriptions
          <toggle-button color="#8bc990" v-bind:font-size="14" v-model="showDesc" :labels="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameDice from './GameDice.vue'
import ScoreCategory from './ScoreCategory.vue'
import RollButton from './RollButton.vue'
import GameRoundBar from './GameRoundBar.vue'

export default {
  name: 'Game',
  components: {
    GameDice,
    ScoreCategory,
    RollButton,
    GameRoundBar
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
    rolling: function () {
      return this.$store.state.rolling
    },
    totalPoints: function () {
      return this.$store.state.totalScore.rule.points()
    },
    maxPoints: function () {
      return this.$store.state.maxPoints
    },
    maxGameRound: function () {
      return this.$store.state.maxGameRound
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
      } else if (event.keyCode === 49) {
        self.lockDice(0)
      } else if (event.keyCode === 50) {
        self.lockDice(1)
      } else if (event.keyCode === 51) {
        self.lockDice(2)
      } else if (event.keyCode === 52) {
        self.lockDice(3)
      } else if (event.keyCode === 53) {
        self.lockDice(4)
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

.buttons {
  padding: 0 20px 10px 20px;
  display: flex;
  justify-content: space-between;
}

.space {
  flex: 0.1;
}

.game {
  display: flex;
  flex-direction: column;
  margin-left: 0em;
  margin-right: 0em;
  height: 100vh;
}

.dicerow {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 20px 20px;
}

.green {
  background-color: #8bc990;
  flex: 0.17;
}

.avoidclicks {
  pointer-events: none;
}

.floating {
  position: absolute;
  margin-left: 20px;
}

.columnNoWrap {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.totalPoints {
  margin-left: 20px;
}

.gameroundbar {
  flex: 0.03;
}

.scoreCategories {
  flex: 0.78;
}

@media screen and (min-width: 550px) {
  .buttons {
    padding: 0 20px 20px 20px;
  }
}
</style>
