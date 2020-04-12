<template>
  <div class="home">
    <template v-if="cards.length > 0 && cardBack && !cardsError">
      <CardGame :cards="cards" :cardBack="cardBack" />
    </template>
    <template v-else-if="cardsError">
      <p>VIRHE! Kortit ovat hukassa <span aria-hidden="true">🆘</span></p>
    </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader';
import CardGame from '@/components/CardGame';

export default {
  name: 'Home',
  components: {
    Loader,
    CardGame
  },
  computed: {
    cardsError() {
      return this.$root.$data.state.cardsError;
    },
    cards() {
      return this.$root.$data.state.cards;
    },
    cardBack() {
      return this.$root.$data.state.cardBacks[0] || null;
    }
  }
}
</script>
