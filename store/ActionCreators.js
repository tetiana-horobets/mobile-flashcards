import {
  LOAD_DECKS,
  SELECT_DECK
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
        .then(id => {
          dispatch(selectDeck(id));
          loadDecks()(dispatch);
        })
  }
}

export function selectDeck(id) {
  return {
    type: SELECT_DECK,
    selectedDeck: id
  }
}
