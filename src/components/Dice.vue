<template>
  <div class="dice">
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Dice',
  props: {
    dice: Object
  },
  computed: {
    image: function () {
      return require('@/assets/Dice-' + this.dice.side + '.svg')
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.dice {
  line-height: 1em;
  height: 3em;
  width: 3em;
  cursor: pointer;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.76);
  border-radius: 3px;
}
</style>
