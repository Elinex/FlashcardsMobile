import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { STORAGE_KEY } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Deck extends Component{
  static navigationOptions = {
    title: 'Deck',
  }

  actions = () => {
    const { id, deck } = this.props.navigation.state.params
    this.props.navigation.navigate('Card', { id, deck })
    clearLocalNotification()
      .then(setLocalNotification)
  }

  showBtn = () => {
    const { deck } = this.props.navigation.state.params
    if (deck.cards.length > 0){
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={this.actions}
        >
          <Text style={{color: 'white'}}>Start Quiz</Text>
        </TouchableOpacity>
      )
    }
  }

  render(){

    const { id, deck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>{deck.title}</Text>
          <Text style={styles.cardsNumber}>{deck.cards.length} cards</Text>
        </View>
        <View style={styles.boxBtn}>
          {this.showBtn()}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddCard', { id, deck })}
          >
            <Text style={{color: 'white'}}>Add Cards</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardsNumber: {
    color: 'gray',
    fontSize: 22,
    margin: 10
  },
  boxBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3478f6',
    padding: 10,
    margin: 10,
    width: 100,
    height: 40
  }
})

export default connect()(Deck)
