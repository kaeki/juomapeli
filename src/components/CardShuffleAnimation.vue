<template>
  <div class="animate">
    <Card :back="back" :style="firstStyle" />
    <Card :back="back" :style="secondStyle" />
    <Card :back="back" />
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  props: {
    back: {
      type: Object,
      required: true
    },
    duration: {
      type: Number,
      default: 1
    },
    count: {
      type: String || Number,
      default: 'infinite'
    }
  },
  components: {
    Card
  },
  computed: {
    firstStyle() {
      return {
        animationDuration: `${this.duration}s`,
        animationIterationCount: this.count,
      }
    },
    secondStyle() {
      return {
        animationDuration: `${this.duration}s`,
        animationIterationCount: this.count,
        animationDelay: `${this.duration * .3}s`
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes shuffle-card-first {
  0% {
    transform: rotateY(0) translateX(0);
    z-index: 2;
  }

  50% {
    transform: translate3d(-85%, -1rem, 2rem) rotateY(60deg) rotate(-5deg) scale(1.05);
  }


  100% {
    transform: rotateY(0) translateX(0) scale(.95);
    z-index: -2;
  }
}

@keyframes shuffle-card-second {
  0% {
    transform: rotateY(0) translateX(0);
    z-index: 1;
  }

  50% {
    transform: translate3d(75%, .5rem, 1rem) rotateY(-75deg) rotate(-8deg) scale(1.05);
  }

  60% {
    z-index: -2;
  }

  100% {
    transform: rotateY(0) translateX(0) scale(.95);
    z-index: -2;
  }
}

.animate {
  position: relative;
  max-width: 400px;
  height: auto;

  &::before {
    content: "";
    width: 100%;
    display: block;
    padding-bottom: 140%;
  }

  .card {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 25px;
    border: 3px solid white;
    
    &:nth-child(1) {
      animation: shuffle-card-first ease-in-out;
    }
    &:nth-child(2) {
      animation: shuffle-card-second ease-in-out;
    }

    &:nth-child(3) {
      z-index: -1;
    }
  }
}
</style>