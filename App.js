import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import Deck from './components/Deck'
import AllDecks from './components/AllDecks'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Card from './components/Card'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import { connect } from 'react-redux'
import { setLocalNotification } from './utils/helpers'

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
      tabBarLabel: 'DECKS'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
},
{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    style: {
      height: 70,
      backgroundColor: '#17175A',
      justifyContent: 'center',
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }
})

const RootStack = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Card: {
    screen: Card
  },
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#17175A',
      alignItems: 'center'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

class App extends Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    console.disableYellowBox = true
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar barStyle='light-content' />
          <RootStack />
        </View>
      </Provider>
    )
  }
}

export default App
