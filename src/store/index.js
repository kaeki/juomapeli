import storage from '../firebase';

const store = {
  debug: true,
  state: {
    cards: [],
    cardsError: false
  },
  fetchCards() {
    const cardFaces = storage.ref('card-faces');
    
    cardFaces.listAll()
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
            this.state.cards = values;
          });
      })
      .catch(error => {
        this.cardsError = true;
        console.log(error);
      });
  },
}

export default store;