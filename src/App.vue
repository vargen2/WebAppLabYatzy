<template>
  <div id="app">
    <Game></Game>
    <footer>
      <div class="row">
        <div class="column">
          <a
            href="https://en.wikipedia.org/wiki/Yatzy"
            target="_blank"
            rel="noopener noreferrer"
          >https://en.wikipedia.org/wiki/Yatzy</a>
          <a
            href="https://github.com/vargen2"
            target="_blank"
            rel="noopener noreferrer"
          >https://github.com/vargen2</a>
          <a
            href="https://www.iths.se"
            target="_blank"
            rel="noopener noreferrer"
          >https://www.iths.se</a>
        </div>
        <div class="column">
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">https://vuejs.org</a>
          <a
            href="https://vuex.vuejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >https://vuex.vuejs.org</a>
          <a
            href="https://cli.vuejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >https://cli.vuejs.org</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Game from './components/Game.vue'
export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

body {
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.4;
  max-width: 800px;
  margin: 0px auto;
  padding: 0 10px;
  color: #2c3e50;
  background: #ccc;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  height: 30px;
  background-color: #eee;
  color: rgb(73, 73, 73);
  box-shadow: 0 4px rgb(126, 118, 118);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  border: 2px solid #ccc;
  outline: none;
}

button:hover {
  background-color: #dada73;
}

button:active {
  background-color: #dada73;
  box-shadow: 0 2px rgb(126, 118, 118);
  transform: translateY(2px);
}

@media screen and (min-width: 550px) {
  .row {
    margin-bottom: 8px;
  }

  .column {
    flex: 1;
  }

  .column:nth-child(2) {
    margin-left: 2em;
  }
  button {
    font-size: 1.5em;
    height: 50px;
  }
}
</style>
