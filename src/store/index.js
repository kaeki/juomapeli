const store = {
  debug: true,
  state: {
    cards: [],
    cardBacks: [],
    cardsError: false
  },
  fetchCards() {
    this.state.cards = [
      {
        src: 'https://placekitten.com/400/577',
        meta: {
          generation: 1,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/400/600',
        meta: {
          generation: 2,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/420/577',
        meta: {
          generation: 3,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/430/610',
        meta: {
          generation: 4,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/430/610',
        meta: {
          generation: 5,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/410/590',
        meta: {
          generation: 6,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/450/650',
        meta: {
          generation: 7,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/400/670',
        meta: {
          generation: 8,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/500/780',
        meta: {
          generation: 9,
          name: 'kisu'
        }
      }, {
        src: 'https://placekitten.com/470/760',
        meta: {
          generation: 9,
          name: 'kisu'
        }
      }
    ]
    this.state.cardBacks = [
      {
        src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0200%2F7616%2Fproducts%2Fplaying-cards-bicycle-rider-back-2_grande.png%3Fv%3D1474344815&f=1&nofb=1',
        meta: {
          generation: 123,
          name: 'back'
        }
      }
    ]
  }
}

export default store;
