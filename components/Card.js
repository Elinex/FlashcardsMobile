import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import AnswerView from './AnswerView'

class Card extends Component{
  static navigationOptions = {
    title: 'Card question',
  }

  render(){

    const { id, deck } = this.props.navigation.state.params

    return (

      <View style={{flex: 1}}>
        <View style={styles.boxCardsNumber}>
          <Text style={styles.cardsNumber}>card 1 of n</Text>
        </View>
        <View style={styles.boxQuestion}>
          <Text style={styles.question}>Question: Does bla bla?</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              disabled={true}
              style={[styles.disabledBtn, {backgroundColor: 'green'}]}
            >
              <Text style={{color: 'white'}}>
                Correct
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity
              disabled={true}
              style={[styles.disabledBtn, {backgroundColor: 'red'}]}
            >
              <Text style={{color: 'white'}}>
                Incorrect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.answerBtn}
            // onPress={this.showAnswer}
            onPress={() => this.props.navigation.navigate('AnswerView', { id, deck })}
          >
            <Text style={{color: 'white'}}>
              See answer
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
  boxQuestion: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  question: {
    color: 'orange',
    fontSize: 36,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  disabledBtn: {
    opacity: 0.3,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 40
  },
  answerBtn: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3478f6',
    padding: 10,
    width: 100,
    height: 40
  }
})

export default Card
