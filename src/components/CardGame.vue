<template>
  <div class="wrapper">
    <div class="info">
      <div class="info__box">
        <button class="button" @click="shuffle">
          Sekoita pakka
        </button>
      </div>
      <div class="info__box">
        <p>{{nextCardIndex}}/{{shuffledCards.length}}</p>
      </div>
    </div>
    <div v-if="shuffledCards.length > 0" class="game">
      <button
        v-if="sharedCards.length !== shuffledCards.length"
        class="share-card-button"
        title="Jaa uusi kortti"
        @click="shareCard">
        <Card :back="cardBack" :lazyload="false"/>
      </button>
      <CardFlippingAnimation :fadeOut="cardFadeOut">
        <Card
          v-for="(card, index) in sharedCards"
          class="shared-card"
          :key="card.meta.generation"
          :face="card"
          :back="cardBack"
          :lazyload="false"
          :style="{ 'z-index': index + 1 }"/>
      </CardFlippingAnimation>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import CardFlippingAnimation from '@/components/CardFlippingAnimation';

export default {
  components: {
    Card,
    CardFlippingAnimation
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    cardBack: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      shuffledCards: [],
      sharedCards: [],
      nextCardIndex: 0,
      cardFadeOut: false
    }
  },
  methods: {
    shuffle() {
      const shuffled = [...this.cards];

      for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      this.cardFadeOut = false;
      this.sharedCards = [];
      this.nextCardIndex = 0;
      this.shuffledCards = shuffled;

      setTimeout(() => this.cardFadeOut = true, 1000);
    },
    shareCard() {
      const newCard = this.cards[this.nextCardIndex];
      const lastTenCards = this.sharedCards.slice(Math.max(this.sharedCards.length - 9, 0));

      this.sharedCards = [...lastTenCards, newCard];
      this.nextCardIndex = this.nextCardIndex + 1;
    }
  },
  mounted() {
    this.shuffle();
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  align-items: center;
  min-height: 4rem;

  &__box {
    flex: 1 1 50%;
  }

  p {
    margin: 0;
  }
}

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
  pointer-events: none;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
}
</style>