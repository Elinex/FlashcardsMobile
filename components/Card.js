import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../utils/helpers'

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

  nextCard = () => {
    const { index, cardsNumber } = this.state
    this.setState({
      index: index + 1,
      seeAnswer: false,
    })
  }

  upScore = () => {
    const { score, cardsNumber } = this.state
    const pointForEachCard = 1/cardsNumber
    this.setState({
      score: (score + pointForEachCard)
    })
  }

  render(){
    console.log(this.props)

    const { cardsNumber, index, seeAnswer, score } = this.state
    const { id, deck } = this.props.navigation.state.params
    const card = deck.cards[(index - 1)]

    if (card === undefined) {
      return (
        <View style={[styles.box2, {flex: 1}]}>
          <Text style={{color: colors.darkBlue, fontSize: 30}}>Final score</Text>
          <Text style={{color: colors.darkBlue, fontSize: 50}}>{(score*100).toFixed()}%</Text>
        </View>
      )
    }

    return (

      <View style={{flex: 1}}>
        <View style={styles.box1}>
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={styles.cardsNumber}>
              {`${index}/${cardsNumber}`}
            </Text>
          </View>
          {seeAnswer && (
            <View style={{justifyContent: 'flex-end', marginRight: 10}}>
              <TouchableOpacity
                onPress={this.nextCard}>
                  <Text style={styles.cardsNumber}>Next ></Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.box2}>
          <Text style={styles.question}>
            {card.question}
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
              style={[styles.correctBtn, {opacity: 0.3}]}>
                <Text style={styles.correctText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={true}
                style={[styles.correctBtn, {opacity: 0.3, backgroundColor: colors.red}]}>
                <Text style={[styles.correctText, {color: colors.white}]}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          )}

          {seeAnswer && (
            <View style={styles.box3}>
              <TouchableOpacity
                style={styles.correctBtn}
                onPress={this.upScore}>
                <Text style={styles.correctText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.correctBtn, {backgroundColor: colors.red}]}>
                <Text style={styles.correctText}>Incorrect</Text>
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
    justifyContent: 'space-between'
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
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 40,
    backgroundColor: 'green'
  },
  correctText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Card
