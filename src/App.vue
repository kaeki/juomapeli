<template>
  <div id="app">
    <h1>JUOMAPeli</h1>
    <template v-if="cards.length == 0">
      <Loader />
      <p>Loading</p>
    </template>
    <template v-else>
      <CardsList :cards="cards" />
    </template>
  </div>
</template>

<script>
import storage from './firebase';

import CardsList from './components/CardsList';
import Loader from './components/Loader';

export default {
  name: 'App',
  components: {
    CardsList,
    Loader
  },
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    const newCards = [];

    async function generateCardItem(cardRef) {
      const src = await cardRef.getDownloadURL();
      const meta = await cardRef.getMetadata();
      console.log(meta)
      newCards.push({
        src,
        meta
      });
    }

    const cardFaces = storage.ref('card-faces');

    cardFaces.listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          generateCardItem(itemRef);
        });
      })
      .catch(error => {
        this.cardFetchError = true;
        console.log(error);
      });

    this.cards = newCards;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  * {
    box-sizing: border-box;
  }
}
</style>
