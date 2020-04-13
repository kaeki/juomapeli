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
    <BackToTopButton />
  </div>
</template>

<script>
import CardsList from '@/components/CardsList';
import Loader from '@/components/Loader';
import BackToTopButton from '@/components/BackToTopButton';

export default {
  components: {
    CardsList,
    Loader,
    BackToTopButton
  },
  computed: {
    state() {
      return this.$root.$data.state;
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  padding: 0 1rem;
}
</style>