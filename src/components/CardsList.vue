<template>
  <ul>
    <li v-for="card in cards" :key="card.meta.generation">
      <div class="card">
        <div class="card__image-wrapper">
          <img :data-src="card.src" :alt="card.meta.name" v-lazyload>
        </div>
        <div class="card__description">
          <p><b>Nimi:</b> {{card.meta.name}}</p>
          <p><b>Päiväys:</b> {{new Date(card.meta.updated).toLocaleDateString('fi-FI')}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CardsList',
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
ul, li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  li {
    margin: 1rem;
    flex-grow: 1;
    flex-basis: calc(33% - 2rem);
    max-width: 400px;
    min-width: 280px;
  }

  .card {
    border: 2px solid lightgray;

    &__image-wrapper {
      img {
        background-color: black;
        max-width: 100%;
      }
    }

    &__description {
      margin: 1rem;

      p {
        text-align: left;
      }
    }
  }
}
</style>
