<template>
  <div class="card">
    <div class="card__face card__face--back">
      <img v-if="lazyload" :data-src="back.src" :alt="alts ? back.meta.name : null" v-lazyload>
      <img v-else :src="back.src" :alt="alts ? back.meta.name : null">
    </div>
    <div v-if="face" class="card__face card__face--front">
      <img v-if="lazyload" :data-src="face.src" :alt="alts ? face.meta.name : null" v-lazyload>
      <img v-else :src="face.src" :alt="alts ? face.meta.name : null">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    back: {
      type: Object,
      required: true
    },
    face: {
      type: Object,
    },
    alts: {
      type: Boolean,
      default: false
    },
    lazyload: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: auto;
  max-width: 400px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 4px rgba(0,0,0, .5);
  background-color: black;
  border-radius: 25px;
  border: 5px solid white;

  &::before {
    content: " ";
    display: block;
    padding-bottom: 145%;
  }

  &.flipped {
    transform: rotateY(180deg);
  }

  &__face {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: black;
    backface-visibility: hidden;
    border-radius: 25px;
    overflow: hidden;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  &__face--back {

  }

  &__face--front {
    transform: rotateY(180deg);
  }
}
</style>