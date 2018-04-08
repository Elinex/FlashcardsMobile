import { AsyncStorage } from 'react-native'

AsyncStorage.setItem('decks', {})

// export let decks = 'decks'
//
// function setDecks(){
//   AsyncStorage.setItem(decks, JSON.stringify({}))
//
//   return decks
// }

// function getDecks(){
//
// }
//
// AsyncStorage.setItem('decks', {}, () => {
//   AsyncStorage.mergeItem('decks', JSON.stringify(deck), () => {
//     AsyncStorage.getItem('decks', (err, result) => {
//       console.log(result)
//     })
//   })
// })

// getDecks: retorna todos os baralhos com seus títulos, perguntas, e respostas.
// getDeck: dado um único argumento id, ele retorna o baralho associado àquele id.
// saveDeckTitle: dado um único argumento title, ele adiciona-o aos baralhos.
// addCardToDeck: dado dois argumentos, title e card, ele adiciona o cartão à
// lista de perguntas ao baralho com o título associado.

// export function getDecks(){
//
// }

// import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

// export function fetchCalendarResults(){
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then(formatCalendarResults)
// }
//
// export function submitEntry({ entry, key }){
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }
//
// export function removeEntry(key){
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((result) => {
//       const data = JSON.parse(result)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }
