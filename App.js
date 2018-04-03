import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import AddDeck from './components/AddDeck'
import AllDecks from './components/AllDecks'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'

function AppStatusBar(){
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent />
    </View>
  )
}

const Tabs = TabNavigator({
  AllDecks: {
    screen: AllDecks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    }
  }
},
{
  tabBarOptions: {
    style: {
      height: 56
    }
  }
})

export default class App extends Component {
  render() {
    console.disableYellowBox = true
    return (
      <View style={{flex: 1}}>
        <AppStatusBar barStyle='light-content' />
        <Tabs />
      </View>
    )
  }
}
