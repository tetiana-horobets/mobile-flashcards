import {
  LOAD_DECKS
} from './Actions.js';
import Api from '../Api.js';

export function loadDecks() {
  return dispatch => {
    const api = new Api();
    api.getDecks().then(data => dispatch({
      type: LOAD_DECKS,
      decks: data
    }))
  }
}

export function createDeck(deck) {
    return dispatch => {
      const api = new Api();
      api.createDeck(deck)
        .then(data => {
          loadDecks()(dispatch);
        })
  }
}
