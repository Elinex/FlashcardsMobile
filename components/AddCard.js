import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { addDeckAPI } from '../utils/api'
import { addDeck } from '../redux/actions'
import { connect } from 'react-redux'
import { colors } from '../utils/helpers'

class AddCard extends Component{
  static navigationOptions = {
    title: 'ADD CARD',
  }

  state = {
    question: '',
    answer: ''
  }

  createCard = () => {
    const { id, deck } =  this.props.navigation.state.params
    const { question, answer } = this.state
    const card = {
      question,
      answer
    }

    if ((question === '') || (answer === '')) {
      alert('Fill all the fields')
    } else {
      deck.cards = deck.cards.concat(card)
      addDeckAPI(id, deck)
      this.props.dispatch(addDeck(id, deck))
      this.props.navigation.navigate('Deck', { id, deck })
    }

  }

  render(){
    console.log('AddCard: ', this.props);

    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TextInput
            style={styles.textInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholder='Insert question'
            placeholderTextColor={colors.darkBlue}
            autoCapitalize='sentences'
            underlineColorAndroid={colors.darkBlue}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder='Insert answer'
            placeholderTextColor={colors.darkBlue}
            autoCapitalize='sentences'
            underlineColorAndroid={colors.darkBlue}
          />
        </View>
        <View style={styles.boxSubmitBtn}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.createCard}
          >
            <Text style={{color: colors.white, fontSize: 16}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  textInput: {
    height: 80,
    margin: 15,
    textAlign: 'center',
    borderRadius: 2,
    fontSize: 22,
    backgroundColor: colors.white,
    borderColor: colors.darkBlue
  },
  boxSubmitBtn: {
    flex: 1,
    alignItems: 'center'
  },
  submitBtn: {
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    padding: 10,
    width: 100
  }
})

export default connect()(AddCard)
