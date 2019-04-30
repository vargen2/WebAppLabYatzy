<template>
  <div :class="{filled:filled}" class="box">
  </div>
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
.box{
  flex: 1;
    height: 20px;
    border: 1px solid black;
    background: #eee;
}

.filled{
    background: rgb(102, 143, 197);
}
</style>
