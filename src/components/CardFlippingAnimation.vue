<template>
  <transition-group
      name="card-flipping-animation"
      mode="out-in"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @leave="leave">
      <slot />
  </transition-group>
</template>

<script>
export default {
  props: {
    fadeOut: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    randomMax(max) {
      const random = Math.floor(Math.random() * max);
      return Math.random() > .5 ? random * -1 : random;
    },
    beforeEnter(el) {
      el.style.transform = `rotateZ(0deg) rotateY(0) translateY(0)`;
      el.style.left = '1rem';
      el.style.transition = '1s';
      el.style.pointerEvents = 'auto';
    },
    afterEnter(el) {
      const z = this.randomMax(5);
      const top = this.randomMax(5);

      el.style.left = `calc(100% - ${el.offsetWidth}px - 1rem)`;
      el.style.transform = `rotateY(180deg) rotateZ(${z}deg) translateY(${top}px)`;
      el.style.pointerEvents = 'none';
    },
    leave(el) {
      if (this.fadeOut) {
        el.style.opacity = 0;
      } else {
        el.style.left = 0;
        el.style.transform = `rotateY(0) rotateZ(0deg) translateY(0px)`;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>