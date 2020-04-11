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
:root {
  --accent: #42b983;
  --accent-dark: #2c3e50;
  --text-light: #fff;
  --text: #2c3e50;
}

html {
  scroll-behavior: smooth;
}

html, body {
  * {
    box-sizing: border-box;
  }
}

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

img {
  max-width: 100%;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
}

.button {
  cursor: pointer;
  border-radius: 4px;
  padding: .5rem 1rem;
  font-size: 1.2rem;
  color: var(--text-light);
  background-color: var(--accent);
  border: 0;
  box-shadow: 0 1px 4px rgba(0,0,0, .5);
  transition: .1s;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--accent-dark);
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
