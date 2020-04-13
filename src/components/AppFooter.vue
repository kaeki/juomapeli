<template>
  <footer>
    <ul>
      <li>
        <a href="https://github.com/kaeki/juomapeli" class="link-button link-button--github">
          <span class="fab fa-github icon"></span> Github
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--accent-dark);
  color: var(--text-light);
  padding: .5rem 1rem;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.3);
}

ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul {
  display: flex;
  justify-content: center;
}

li {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.link-button {
  color: white;
  padding: .5rem .8rem;
  margin: .5rem 0;
  text-decoration: none;
  font-weight: bold;
  line-height: 1;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);

  &--github {
    background-color: #24292e;

    &:hover,
    &:focus {
      background-color: #32363a;
    }
  }

  &--linkedin {
    background-color: #2977c9;

    &:hover,
    &:focus {
      background-color: #006097;
    }
  }

  .icon {
    font-size: 1.2rem;
    margin-right: .2rem;
  }
}
</style>