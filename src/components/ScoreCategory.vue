<template>
  <div
    class="scorecategory"
    v-bind:class="{ avoidclicks: score.dices.length>0 }"
    v-on:click="$emit('score-click')"
  >
    <div class="left">
      <div class="title">{{score.name}}</div>

      <div class="content">
        <div class="dicerow">
          <dice
            class="small-dice"
            v-for="(dice, index) in score.dices"
            v-bind:key="index"
            v-bind:dice="dice"
          ></dice>
        </div>
        <div class="points">{{points}}</div>
      </div>
    </div>
    <span class="tooltiptext">{{score.description}}</span>
  </div>
</template>

<script>
import Dice from "./Dice.vue";
export default {
  name: "ScoreCategory",
  props: {
    score: Object
  },
  computed: {
    points: function() {
      if (!this.score.scoreFunc) {
        return 0;
      }
      return this.score.scoreFunc(this.score.dices);
    }
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
  width: 2em;
  /* background-color: rgb(161, 161, 161); */
}

.small-dice {
  height: 1.6em;
  width: 1.6em;
  margin-right: 0.2em;
}

.avoidclicks {
  pointer-events: none;
}



/* Tooltip text */
.tooltiptext {
  visibility: hidden;
  /* width: 120px; */
  background-color: rgb(233, 233, 233);
  color: rgb(73, 73, 73);
  text-align: center;
  padding: 5px 0;
  /* border-radius: 6px; */
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.scorecategory:hover .tooltiptext {
  visibility: visible;
}
</style>
