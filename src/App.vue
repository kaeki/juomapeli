<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Juomapelin perkele</router-link> |
      <router-link to="/kaikki-kortit">Selaa kortteja</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  mounted() {
    store.fetchCards();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.vis-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
}

</style>
