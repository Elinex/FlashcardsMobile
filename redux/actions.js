export const ADD_DECK = 'ADD_DECK'

export function addDeck(id, deck){
  return {
    type: ADD_DECK,
    id,
    deck
  }
}
