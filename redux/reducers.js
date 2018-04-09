import { ADD_DECK } from './actions'

function decks(state = {}, action){
  const { id, deck, type } = action
  switch (type){
    case ADD_DECK:
      return {
        ...state,
        [id]: deck
      }
    default:
      return state
  }
}

export default decks
