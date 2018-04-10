import { ADD_DECK, GET_DECKS } from './actions'

const decks = (state = {}, action) => {
  const { id, deck, type, decks } = action
  switch (type){
    case ADD_DECK:
      return {
        ...state,
        [id]: deck
      }
    case GET_DECKS:
      return {
        decks
      }
    default:
      return state
  }
}

export default decks
