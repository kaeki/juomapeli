<template>
  <button
    v-if="visible"
    @click="backToTop"
    class="back-to-top"
    title="Takaisin ylös">
    <span aria-hidden="true" class="emoji">🔝</span>
    <span class="vis-hidden">Hyppää takaisin sivun yläreunaan</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    toggle() {
      console.log('scroll')
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => this.toggle());
  }
}
</script>

<style lang="scss" scoped>
  .back-to-top {
    cursor: pointer;
    position: fixed;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    right: 1rem;
    bottom: 2rem;
    font-size: 2rem;
    background-color: var(--accent);
    border: 0;
    box-shadow: 0 5px 12px rgba(0,0,0, .5);
    transition: .1s;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--accent-dark);
    }

    .emoji {
      color: transparent;
      text-shadow: 0 0 0 white;
    }
  }
</style>