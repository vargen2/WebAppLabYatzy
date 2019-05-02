<template>
  <div :class="{filled:filled}" class="box"></div>
</template>

<script>
export default {
  name: 'GameRoundBarBox',
  props: {
    filled: Boolean
  }
}
</script>

<style scoped>
.box {
  flex: 1;
  height: auto;
  border: 1px solid black;
  border-right: 0;
  background: #eee;
}

.box:last-child {
  border-right: 1px solid black;
}

.filled {
  background: rgb(160, 150, 240);
}
</style>
