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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
