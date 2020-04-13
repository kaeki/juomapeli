<template>
  <div id="app">
    <AppHeader class="header" />
    <main>
      <router-view />
    </main>
    <AppFooter class="footer"/>
  </div>
</template>

<script>
import store from '@/store';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    store.fetchCards();
  }
}
</script>

<style lang="scss">
@import '@/assets/global';

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  overflow: hidden;
}

.header {
  flex: 0;
}

main {
  flex: 1;
}

.footer {
  flex: 0;
}
</style>
