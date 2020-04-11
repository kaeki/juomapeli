<template>
  <div>
    <h1>Pelipeli</h1>
    <template v-if="cards.length > 0 && cardBack && !cardsError">
      <div>
        <button @click="shuffle">{{shuffleText}}</button>
      </div>
      <div v-if="shuffledCards.length > 0" class="game">
        <button class="share-card-button" @click="shareCard">
          <Card :back="cardBack" />
        </button>

        <Card
          v-for="(card, index) in sharedCards"
          class="shared-card flipped"
          :key="card.meta.generation"
          :face="card"
          :back="cardBack"
          :style="{ 'z-index': index }"/>
      </div>
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
import Card from '@/components/Card';

export default {
  components: {
    Loader,
    Card
  },
  data() {
    return {
      shuffledCards: [],
      sharedCards: [],
      nextCardIndex: 0
    }
  },
  computed: {
    cardsError() {
      return this.$root.$data.state.cardsError;
    },
    cardBack() {
      return this.$root.$data.state.cardBacks[0] || null;
    },
    cards() {
      return this.$root.$data.state.cards;
    },
    shuffleText() {
      return this.shuffledCards.length > 0
        ? 'Sekoita uudelleen'
        : 'Sekoita pakka'
    }
  },
  methods: {
    shuffle() {
      const shuffled = [...this.cards];

      for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      this.sharedCards = [];
      this.nextCardIndex = 0;
      this.shuffledCards = shuffled;
    },
    shareCard() {
      const newCard = this.cards[this.nextCardIndex];
      this.sharedCards.push(newCard);
      this.nextCardIndex = this.nextCardIndex + 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  margin: 3rem auto;
  padding: 2rem 1rem;
  position: relative;
  max-width: 1080px;
}

.share-card-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 400px;
  padding: 0;
  border: 0;
  cursor: pointer;
}

.shared-card {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
}
</style>