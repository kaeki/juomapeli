<template>
  <div class="cards">
    <h1>Kaikki kortit</h1>
    <template v-if="state.cards.length > 0 && !state.cardsError">
      <p>Kortteja löytyy tällä hetkellä kaikkineen {{state.cards.length}} kappaletta</p>
      <CardsList :cards="state.cards" />
    </template>
    <template v-if="state.cardsError">
      <p>VIRHE! Kortit ovat hukassa <span aria-hidden="true">🆘</span></p>
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