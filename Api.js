import { AsyncStorage } from 'react-native';

export default class Api {

  getDecks() {
    return Promise.resolve({
      React: {
        id: 'React',
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        id: 'JavaScript',
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    });
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
