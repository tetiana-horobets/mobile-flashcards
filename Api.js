import { AsyncStorage } from 'react-native';

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
    AsyncStorage.mergeItem('decks', deckJson);
  }
}
