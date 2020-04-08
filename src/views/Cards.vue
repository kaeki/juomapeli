<template>
  <div class="cards">
    <h1>Kaikki kortit</h1>
    <p>Kortteja löytyy tällä hetkellä kaikkineen {{state.cards.length}} kappaletta</p>
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