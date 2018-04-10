export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'

export function addDeck(id, deck){
  return {
    type: ADD_DECK,
    id,
    deck
  }
}

export function getDecks(decks){
  return {
    type: GET_DECKS,
    decks
  }
}
