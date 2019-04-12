<template>
  <div
    class="scorecategory"
    v-bind:class="{ avoidclicks: score.dices.length>0 }"
    v-on:click="$emit('score-click')"
  >
    <div class="left">
      <div class="title">{{score.name}}</div>

      <div class="dicerow" v-if="score.dices.length>0">
        <dice
          class="small-dice"
          v-for="(dice, index) in score.dices"
          v-bind:key="index"
          v-bind:dice="dice"
        ></dice>
      </div>
    </div>
   
  </div>
</template>

<script>
import Dice from "./Dice.vue";
export default {
  name: "ScoreCategory",
  props: {
    score: Object
  },
  components: {
    Dice
  }
};
</script>

<style scoped>
.scorecategory {
  background-color: rgb(160, 199, 155);
  width: 100%;
  height: 3em;
  cursor: pointer;
  margin-bottom: 4px;
  display: flex;
}

.points {
  width: 3em;
  background-color:rgb(161, 161, 161);
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
  color: rgb(233,233,233);
}

.dicerow {
  display: flex;
  justify-content: center;
  margin: 0.1em;
}

.small-dice {
  height: 1.6em;
  width: 1.6em;
  margin-right: 0.2em;
}

.avoidclicks {
  pointer-events: none;
}
</style>
