<template>
  <button
    class="game-button"
    @click="$emit('roll')"
    :class="{one :rollRound===1,two:rollRound===2,three:rollRound===3}"
  >
    Roll
    <span v-show="showDesc">(Key R)</span>
  </button>
</template>

<script>
export default {
  name: 'RollButton',
  props: {
    rollRound: Number,
    showDesc: Boolean
  }
}
</script>

<style scoped>

.game-button {
  flex: 1;
  outline: none;
  background: linear-gradient(
    to right,
    rgb(160, 150, 240) 0%,
    #eee 0%,
    #eee 33%,
    #ccc 33%,
    #ccc 34%,
    #eee 34%,
    #eee 66%,
    #ccc 66%,
    #ccc 67%,
    #eee 67%
  );
}

.one {
  background: linear-gradient(
    to right,
    rgb(160, 150, 240) 33%,
    #ccc 33%,
    #ccc 34%,
    #eee 34%,
    #eee 66%,
    #ccc 66%,
    #ccc 67%,
    #eee 67%
  );
}

.two {
  background: linear-gradient(
    to right,
    rgb(160, 150, 240) 33%,
    #ccc 33%,
    #ccc 34%,
    rgb(160, 150, 240) 34%,
    rgb(160, 150, 240) 66%,
    #ccc 66%,
    #ccc 67%,
    #eee 67%
  );
}

.three {
  background: linear-gradient(
    to right,
    rgb(160, 150, 240) 33%,
    #ccc 33%,
    #ccc 34%,
    rgb(160, 150, 240) 34%,
    rgb(160, 150, 240) 66%,
    #ccc 66%,
    #ccc 67%,
    rgb(160, 150, 240) 67%
  );
}

</style>
