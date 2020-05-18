import { AsyncStorage } from 'react-native';
import _ from 'lodash';

export default class Api {

  getDecks() {
    return AsyncStorage.getItem('decks').then(data => JSON.parse(data) || {});
  }

  generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  createDeck(deck) {
    const id = this.generateUID();
    const newDeck = {};
    newDeck[id] = {
      id: id,
      title: deck.title,
      questions: deck.questions || []
    };
    const deckJson = JSON.stringify(newDeck);
    return AsyncStorage.mergeItem('decks', deckJson)
      .then(() => id);
  }

  deleteDeck(id) {
    return new Promise(resolve => {
      this.getDecks().then(decks => {
        const newDecks = JSON.stringify(_.omit(decks, id));
        AsyncStorage.setItem('decks', newDecks).then(resolve);
      });
    });
  }
}
