<template>
  <div class="wrapper">
    <div class="info">
      <div class="info__box">
        <button class="button" @click="shuffle">
          <span class="fa fa-random" aria-hidden="true"></span>Sekoita pakka
        </button>
      </div>
      <div class="info__box info__box--progress">
        <span
          class="progress"
          :style="{ width: `${Math.floor(nextCardIndex / shuffledCards.length * 100)}%` }"/>
        <p>{{nextCardIndex}} / {{shuffledCards.length}}</p>
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
  flex-wrap: wrap;
  min-height: 4rem;
  padding: 2rem 1rem 0;

  @media screen and (min-width: 800px) {
    padding: 2rem 1rem;
  }

  &__box {
    flex: 0 0 100%;
    margin: 0 0 1rem;

    @media screen and (min-width: 800px) {
      flex: 1 1 50%;
      margin: auto;
    }

    &--progress {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      background-color: #ebebeb;
    }
  }

  p {
    position: relative;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
    padding: .5rem 1rem;
  }

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--accent);
    transition: width 1s ease-in;
  }
}

.button {
  font-weight: bold;

  .fa {
    margin-right: .5rem;
  }
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