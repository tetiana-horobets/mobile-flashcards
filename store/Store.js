import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LOAD_DECKS, SELECT_DECK } from './Actions.js'
import { combineReducers } from 'redux'

function decksReducer(state = {}, action) {
  if (action.type === LOAD_DECKS){
    return action.decks;
  }
  return state;
}

function selectedDeckReducer(state = null, action) {
  if (action.type === SELECT_DECK) {
    return action.selectedDeck;
  }
  return state;
}

const store = createStore(combineReducers({
  decks: decksReducer,
  selectedDeck: selectedDeckReducer
}), applyMiddleware(thunk));

export default store;
