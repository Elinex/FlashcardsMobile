import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import Deck from './components/Deck'
import AllDecks from './components/AllDecks'
import AddDeck from './components/AddDeck'
// import Deck from './components/Deck'
import { TabNavigator, StackNavigator } from 'react-navigation'
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
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: '#3478f6',
    }
  }
})

const RootStack = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  }
},
{
  initialRouteName: 'Home',
})

export default class App extends Component {
  render() {
    console.disableYellowBox = true
    return (
      <View style={{flex: 1}}>
        <AppStatusBar barStyle='light-content' />
        <RootStack />
      </View>
    )
  }
}
