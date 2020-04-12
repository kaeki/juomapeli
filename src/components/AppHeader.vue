<template>
  <nav id="nav">
    <router-link to="/">
      <span aria-hidden="true">🍺</span> Juomapelin perkele
    </router-link>
    <router-link to="/kaikki-kortit">
      <span aria-hidden="true">📜</span> Selaa kortteja
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
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
</style>