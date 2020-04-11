<template>
  <transition-group
      name="card-flipping-animation"
      mode="out-in"
      @before-enter="beforeEnter"
      @after-enter="afterEnter">
      <slot />
  </transition-group>
</template>

<script>
export default {
  methods: {
    randomMax(max) {
      const random = Math.floor(Math.random() * max);
      return Math.random() > .5 ? random * -1 : random;
    },
    beforeEnter: function (el) {
      el.style.transform = `rotateZ(0deg) rotateY(0) translateY(0)`;
      el.style.left = 0;
      el.style.transition = '1s';
    },
    afterEnter: function (el) {
      const z = this.randomMax(5);
      const top = this.randomMax(5);

      el.style.left = `calc(100% - ${el.offsetWidth}px)`;
      el.style.transform = `rotateY(180deg) rotateZ(${z}deg) translateY(${top}px)`;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>