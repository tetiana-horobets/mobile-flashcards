import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LOAD_DECKS } from './Actions.js'
import { combineReducers } from 'redux'

function decksReducer(state = {}, action) {
  if (action.type === LOAD_DECKS){
    return action.decks;
  }
  return state;
}

const store = createStore(combineReducers({
  decks: decksReducer
}), applyMiddleware(thunk));

export default store;
