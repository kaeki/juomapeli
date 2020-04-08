<template>
  <div class="cards">
    <h1>All cards</h1>
    <template v-if="state.cards.length > 0 && !state.cardsError">
      <CardsList :cards="state.cards" />
    </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script>
import CardsList from '@/components/CardsList';
import Loader from '@/components/Loader';

export default {
  components: {
    CardsList,
    Loader
  },
  computed: {
    state() {
      return this.$root.$data.state;
    }
  }
}
</script>