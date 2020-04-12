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
        class="share-card-button"
        :title="allCardsShared ? 'Kortit loppuivat ;_;' : 'Jaa uusi kortti'"
        :disabled="allCardsShared"
        @click="shareCard">
        <div v-if="allCardsShared" class="fyll" />
        <Card
          v-else
          :back="cardBack"
          :lazyload="false"/>
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
    <SharedCardsList :cards="sharedCards" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import CardFlippingAnimation from '@/components/CardFlippingAnimation';
import SharedCardsList from '@/components/SharedCardsList';

export default {
  components: {
    Card,
    CardFlippingAnimation,
    SharedCardsList
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
  computed: {
    allCardsShared() {
      return this.nextCardIndex >= this.shuffledCards.length;
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
      if (this.nextCardIndex < this.shuffledCards.length) {
        const newCard = this.cards[this.nextCardIndex];
        const lastTenCards = this.sharedCards.slice(Math.max(this.sharedCards.length - 9, 0));

        this.sharedCards = [...lastTenCards, newCard];
        this.nextCardIndex = this.nextCardIndex + 1;
      }
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
  padding: 2rem 1rem;

  &__box {
    flex: 1 1 50%;
  }

  p {
    margin: 0;
  }
}

.button {
  font-weight: bold;
}

.game {
  margin: 3rem auto;
  position: relative;
  max-width: 1080px;
  padding: 0 1rem;
  text-align: left;
}

.share-card-button {
  width: 100%;
  max-width: 400px;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: white;

  .fyll {
    content: " ";
    display: block;
    padding-bottom: 145%;
  }
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