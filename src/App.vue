<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Juomapelin perkele</router-link> |
      <router-link to="/kaikki-kortit">Selaa kortteja</router-link>
    </div>
    <router-view/>
    <BackToTopButton />
  </div>
</template>

<script>
import store from '@/store';
import BackToTopButton from '@/components/BackToTopButton';

export default {
  name: 'App',
  components: {
    BackToTopButton
  },
  mounted() {
    store.fetchCards();
  }
}
</script>

<style lang="scss">
@import '@/assets/global';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--accent-dark);

    &.router-link-exact-active {
      color: var(--accent);
    }
  }
}


</style>
