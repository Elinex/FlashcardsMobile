import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Card extends Component{
  static navigationOptions = {
    title: 'Card',
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
        <View>
          <Text>Final score is</Text>
          <Text>{(score*100).toFixed()}%</Text>
        </View>
      )
    }

    return (

      <View style={{flex: 1}}>
        <View style={styles.boxCardsNumber}>
          <Text style={styles.cardsNumber}>{`Card ${index} of ${cardsNumber}`}</Text>
        </View>
        {!seeAnswer && (
          <View style={{flex: 5}}>
            <View style={styles.boxQuestion}>
              <Text style={styles.question}>{card.question}</Text>
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
                onPress={this.showAnswer}
              >
                <Text style={{color: 'white'}}>
                  See answer
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {seeAnswer && (
          <View style={{flex: 5}}>
            <View style={styles.boxQuestion}>
              <Text style={styles.question}>{card.question}</Text>
              <Text style={styles.question}>{card.answer}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: 'green'}]}
                  onPress={this.upScore}
                >
                  <Text style={{color: 'white'}}>
                    Correct
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: 'red'}]}
                  // onPress={this.downScore}
                >
                  <Text style={{color: 'white'}}>
                    Incorrect
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={this.nextCard}
              >
                <Text style={{color: 'white'}}>
                  Next Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

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

export default Card
