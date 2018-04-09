import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Card from './Card'

class AnswerView extends Component{
  static navigationOptions = {
    title: 'Card answer',
  }

  render(){

    return (
      <View style={{flex: 1}}>
        <View style={styles.boxCardsNumber}>
          <Text style={styles.cardsNumber}>card 1 of n</Text>
        </View>
        <View style={styles.boxAnswer}>
          <Text style={styles.answer}>Answer: Yes!!!!</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'green'}]}>
              <Text style={{color: 'white'}}>
                Correct
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'red'}]}>
              <Text style={{color: 'white'}}>
                Incorrect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.cardBtn}
            // onPress={this.showCard}
          >
            <Text style={{color: 'white'}}>
              Next Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boxCardsNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardsNumber: {
    color: 'gray',
    fontSize: 22,
    margin: 10
  },
  boxAnswer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  answer: {
    color: 'orange',
    fontSize: 36,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 40
  },
  cardBtn: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3478f6',
    padding: 10,
    width: 100,
    height: 40
  }
})

export default AnswerView
