<template>
  <ul>
    <li v-for="card in cards" :key="card.meta.generation">
      <Card :back="card" :alts="true" :lazyload="true"/>
    </li>
  </ul>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'CardsList',
  components: {
    Card
  },
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
}
</style>
