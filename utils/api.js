import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'STORAGE_KEY'

export function addDeckAPI(id, deck){
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [id]: deck
  }))
}
