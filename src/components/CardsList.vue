<template>
  <ul>
    <li v-for="card in cards" :key="card.meta.generation">
      <div class="card">
        <img :data-src="card.src" :alt="card.meta.name" v-lazyload>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CardsList',
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
ul, li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  li {
    margin: 1rem;
    flex-grow: 1;
    flex-basis: calc(33% - 2rem);
    max-width: 400px;
    min-width: 280px;
  }

  .card {
    position: relative;
    border-radius: 12px;
    background-color: black;
    overflow: hidden;
    height: 0;
    padding-bottom: 145%;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      max-width: 100%;
    }
  }
}
</style>
