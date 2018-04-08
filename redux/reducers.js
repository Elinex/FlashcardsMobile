import { ADD_DECK } from './actions'

function decks(state = [], action){
  switch (action.type){
    case ADD_DECK:
      return state.concat(action.deck)
    default:
      return state
  }
}

export default decks
