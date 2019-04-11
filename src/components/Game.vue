<template>
  <div class="game">
    <h3>Game</h3>
    <p>Game Round: {{gameRound}}</p>
    <p>Roll Round: {{rollRound}}</p>
    <div class="dicerow">
      <div
        class="dice"
        v-for="(dice, index) in dices"
        v-bind:key="index"
        v-on:click="lockDice(index)"
        v-bind:class="{ avoidclicks: isNotLockable }"
      >
        <div v-if="rollRound != 0">
          {{dice.side}}
          <span v-if="dice.locked">locked</span>
        </div>
      </div>
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
      </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  computed: {
    dices: function() {
      return this.$store.state.dices;
    },
    isNotLockable() {
      return this.$store.state.rollRound === 0;
    },
    gameRound: function() {
      return this.$store.state.gameRound;
    },
    rollRound: function() {
      return this.$store.state.rollRound;
    },
    upperScores: function() {
      return this.$store.state.upperScores;
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
    }
  }
};
</script>

<style scoped>
.dicerow {
  display: flex;
  justify-content: center;
}

.dice {
  margin: 2em;
  height: 3em;
  width: 3em;
  background-color: springgreen;
  cursor: pointer;
}

.avoidclicks {
  pointer-events: none;
}

.scoresheet {
  display: flex;  
  justify-content: space-evenly;
}

.scoresection {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.scoringbox {
  border: 1px solid #000;
  width: 10em;
  height: 4em;
  cursor: pointer;
}
</style>
