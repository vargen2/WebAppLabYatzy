<template>
  <div id="app">
    <router-view/>
    <footer>
      <div class="row">
        <div class="column">
          <a
            href="https://web.archive.org/web/20160304135412/http://www.algaspel.se/~/media/Alga/Files/Rules/flersprakiga/38018737_ReseYatzy.ashx"
            target="_blank"
            rel="noopener noreferrer"
          >Swedish Rules</a>
          <a
            href="https://sv.wikipedia.org/wiki/Yatzy"
            target="_blank"
            rel="noopener noreferrer"
          >https://sv.wikipedia.org/wiki/Yatzy</a>
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">https://vuejs.org</a>
        </div>
        <div class="column">
          <a
            href="https://github.com/vargen2"
            target="_blank"
            rel="noopener noreferrer"
          >https://github.com/vargen2</a>
          <a
            href="https://vuex.vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >https://vuex.vuejs.org</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1em;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

@media screen and (min-width: 550px) {
  .column {
    flex: 1;
  }

  .column:nth-child(2) {
    margin-left: 2em;
  }
}

body {
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.4;
  max-width: 800px;
  margin: 0px auto;
  padding: 0 10px;
  color: #2c3e50;
  background: rgb(233, 233, 233);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  text-align: left;
}

#nav a {
  margin-right: 10px;
  height: 100%;
  font-weight: bold;
  text-decoration: none;
  color: rgb(73, 73, 73);
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
