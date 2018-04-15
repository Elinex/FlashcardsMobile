import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
  colors,
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

class Card extends Component{
  static navigationOptions = {
    title: 'CARD'
  }

  state = {
    cardsNumber: this.props.navigation.state.params.deck.cards.length,
    index: 1,
    seeAnswer: false,
    score: 0
  }

  showAnswer = () => {
    this.setState({
      seeAnswer: true,
    })
  }

  upScore = () => {
    const { score, cardsNumber } = this.state
    const pointForEachCard = 1/cardsNumber
    this.setState({
      score: (score + pointForEachCard)
    })
    this.nextCard()
  }

  downScore = () => {
    this.nextCard()
  }

  nextCard = () => {
    const { index, cardsNumber } = this.state
    this.setState({
      index: index + 1,
      seeAnswer: false,
    })
  }

  showScore = (id, deck, score) => {
    this.props.navigation.navigate('Score', { id, deck, score })
  }

  render(){

    const { cardsNumber, index, seeAnswer, score } = this.state
    const { id, deck } = this.props.navigation.state.params
    const card = deck.cards[(index - 1)]

    if (card === undefined) {
      clearLocalNotification()
        .then(setLocalNotification)
      this.showScore(id, deck, score)
    }

    return (
      <View style={{flex: 1}}>
        <View style={styles.box1}>
          <Text style={styles.cardsNumber}>
            {`${index}/${cardsNumber}`}
          </Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.question}>
            {card && card.question}
          </Text>
          {!seeAnswer && (
            <TouchableOpacity style={{alignItems: 'center',padding: 10}} onPress={this.showAnswer}>
              <Text style={styles.btnAnswer}>See answer</Text>
            </TouchableOpacity>
          )}
          {seeAnswer && (
            <View style={{justifyContent: 'flex-start',alignItems: 'center'}}>
              <Text style={styles.answer}>
                {card.answer}
              </Text>
            </View>
          )}
        </View>

          {!seeAnswer && (
            <View style={styles.box3}>
              <TouchableOpacity
                disabled={true}
                style={[styles.correctBtn, {opacity: 0.4}]}>
                <Text style={styles.correctText}>CORRECT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={true}
                style={[styles.correctBtn, {opacity: 0.4, backgroundColor: colors.red}]}>
                <Text style={[styles.correctText, {color: colors.white}]}>INCORRECT</Text>
              </TouchableOpacity>
            </View>
          )}

          {seeAnswer && (
            <View style={styles.box3}>
              <TouchableOpacity
                style={styles.correctBtn}
                onPress={this.upScore}>
                <Text style={styles.correctText}>CORRECT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.correctBtn, {backgroundColor: colors.red}]}
                onPress={this.downScore}>
                <Text style={styles.correctText}>INCORRECT</Text>
              </TouchableOpacity>
            </View>
          )}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cardsNumber: {
    color: colors.orange,
    fontSize: 22,
    margin: 10
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    color: colors.gray,
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  btnAnswer: {
    color: colors.orange,
    fontSize: 18
  },
  answer: {
    color: colors.gray,
    fontSize: 18
  },
  box3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20
  },
  correctBtn: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 40,
    backgroundColor: 'green'
  },
  correctText: {
    color: colors.white,
    fontSize: 16
  }
})

export default Card
