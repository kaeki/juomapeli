<template>
  <transition-group :name="transitionName" tag="ul" ref="cardList">
    <li
      v-for="card in lastFiveCards"
      :key="card.meta.generation">
      <Card :back="card" :alts="true"/>
    </li>
  </transition-group>
</template>

<script>
import Card from '@/components/Card';

export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  components: {
    Card
  },
  data() {
    return {
      cardModal: false
    }
  },
  watch: { 
    lastFiveCards: function() {
      const children = this.$refs.cardList.$children;
      
      if (children.length > 0 && children[children.length - 1]) {
        setTimeout(() => {
          const scroll = children[children.length - 1].$el.offsetLeft;
          this.$refs.cardList.$el.scrollLeft = scroll;
        }, 2000);
      }
    }
  },
  computed: {
    lastFiveCards() {
      return this.cards.slice(Math.max(this.cards.length - 5, 0));
    },
    transitionName() {
      return this.cards.length === 0 ? 'new-game' : 'game-on';
    }
  }
}
</script>

<style lang="scss" scoped>
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  align-items: center;
  padding: 2rem 1rem 1rem;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar { 
    display: none; 
  }
}

li {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(20% - .75rem);
  min-width: 180px;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  .card {
    pointer-events: none;
  }
}

.game-on-enter-active ,
.game-on-leave-active {
  transition: .5s;
}
.game-on-enter-active,
.game-on-leave-active {
  transition-delay: 2s;
}
.game-on-enter, .game-on-leave-to {
  opacity: 0;
  width: 0;
  flex-basis: 0;
}

.new-game-enter-active ,
.new-game-leave-active {
  transition: .5s;
}
.new-game-enter, .new-game-leave-to {
  opacity: 0;
}
</style>