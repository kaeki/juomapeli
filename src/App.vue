<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">
        <span aria-hidden="true">🍺</span> Juomapelin perkele
      </router-link>
      <router-link to="/kaikki-kortit">
        <span aria-hidden="true">📜</span> Selaa kortteja
      </router-link>
    </nav>
    <main>
      <router-view/>
    </main>
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

nav {
  background-color: var(--accent-dark);
  padding: .8rem 1rem;
  box-shadow: 0 3px 4px rgba(0,0,0, .3);

  a {
    display: inline-block;
    font-weight: bold;
    color: var(--text-light);
    text-decoration: none;
    margin: .5rem 0;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    &.router-link-exact-active {
      color: var(--accent);
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}

main {
  padding: 0 1rem;
}
</style>
