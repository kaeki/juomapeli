import storage from '../firebase';

const store = {
  debug: true,
  state: {
    cards: [],
    cardBacks: [],
    cardsError: false
  },
  fetchCards() {
    this.fetchCardsRequest('card-faces', this.state.cards);
    this.fetchCardsRequest('card-backs', this.state.cardBacks);
  },
  fetchCardsRequest(ref) {
    const cardsRef = storage.ref(ref);
    
    cardsRef.listAll()
      .then(res => {
        return res.items.map(async itemRef => {
          const src = await itemRef.getDownloadURL();
          const meta = await itemRef.getMetadata();
          return { src, meta };
        })
      })
      .then(newCards => {
        Promise.all(newCards)
          .then(values => {
            if (ref === 'card-faces') this.state.cards = values;
            else this.state.cardBacks = values;
          });
      })
      .catch(error => {
        this.state.cardsError = true;
        console.log(error);
      });
  },
}

export default store;