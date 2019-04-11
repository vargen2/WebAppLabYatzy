<template>
  <div class="game">
    <h3>Game</h3>
    <p>Game Round: {{gameRound}}</p>
    <p>Roll Round: {{rollRound}}</p>
    <div class="dicerow">
        <div class="dice"  v-for="(dice, index) in dices" 
                v-bind:key="index"
                v-on:click="lockDice(index)">
                {{dice.side}}
                <span v-if="dice.locked">locked</span>
        </div>
    </div>
    <button @click="roll">Roll</button>
    </div>
</template>

<script>

export default {
  name: "Game",
  computed: {
    dices: function() {        
      return this.$store.state.dices
    },
    gameRound: function() {
        return this.$store.state.gameRound
    },
    rollRound: function() {
        return this.$store.state.rollRound
    }
  },
  methods:{
      roll: function () {
        this.$store.dispatch('roll')
      },
      lockDice: function (index) {
          this.$store.dispatch('lockDice',index)
      }
  }
}
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
    background-color: springgreen
}
</style>
