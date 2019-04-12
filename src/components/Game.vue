<template>
  <div class="game">
    <div>Game Round: {{gameRound}}</div>
    <div>Roll Round: {{rollRound}}</div>
    <div class="dicerow">
      <dice
        v-for="(dice, index) in dices"
        v-bind:key="index"
        v-on:dice-click="lockDice(index)"
        v-bind:dice="dice"
      ></dice>
    </div>
    <button @click="roll">Roll</button>
    <div class="scoresheet">
      <div class="scoresection">
        <div
          class="scoringbox"
          v-for="(score, index) in upperScores"
          v-bind:key="index"
          v-on:click="selectUpperScore(index)"
          v-bind:class="{avoidclicks: score.dices.length>0}"
        >
          {{score.name}}
          {{score.dices}}
        </div>
        <div class="scoringbox avoidclicks">Bonus</div>
      </div>
      <div class="scoresection">
        <div
          class="scoringbox"
          v-for="(score, index) in lowerScores"
          v-bind:key="index"
          v-on:click="selectLowerScore(index)"
          v-bind:class="{avoidclicks: score.dices.length>0}"
        >
          {{score.name}}
          {{score.dices}}
        </div>
      </div>
    </div>
    <div class="totalbox">Total:</div>
  </div>
</template>

<script>
import Dice from "./Dice.vue";
export default {
  name: "Game",
  components: {
    Dice
  },
  computed: {
    dices: function() {
      return this.$store.state.dices;
    },
    gameRound: function() {
      return this.$store.state.gameRound;
    },
    rollRound: function() {
      return this.$store.state.rollRound;
    },
    upperScores: function() {
      return this.$store.state.upperScores;
    },
    lowerScores: function() {
      return this.$store.state.lowerScores;
    }
  },
  methods: {
    roll: function() {
      this.$store.dispatch("roll");
    },
    lockDice: function(index) {
      this.$store.dispatch("lockDice", index);
    },
    selectUpperScore: function(index) {
      this.$store.dispatch("selectUpperScore", index);
    },
    selectLowerScore: function(index) {
      this.$store.dispatch("selectLowerScore", index);
    }
  }
};
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-right: 2em;
}

.dicerow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}

.avoidclicks {
  pointer-events: none;
}

.scoresheet {
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.scoresection {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.scoringbox {
  background-color: #42b983;
  width: 100%;
  height: 3em;
  cursor: pointer;
  margin-bottom: 4px;
}

.totalbox {
  display: inline-block;
  border: 1px solid #000;
  height: 3em;
  margin-bottom: 2em;
}
</style>
