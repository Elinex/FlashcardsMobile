import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { addDeckAPI } from '../utils/api'
import { addDeck } from '../redux/actions'
import { connect } from 'react-redux'

class AddCard extends Component{
  static navigationOptions = {
    title: 'Add Card',
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
    deck.cards = deck.cards.concat(card)
    addDeckAPI(id, deck)
    this.props.dispatch(addDeck(id, deck))
    this.props.navigation.navigate('Deck', { id, deck })
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
            placeholderTextColor='white'
            autoCapitalize='sentences'
            underlineColorAndroid='white'
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder='Insert answer'
            placeholderTextColor='white'
            autoCapitalize='sentences'
            underlineColorAndroid='white'
          />
        </View>
        <View style={styles.boxSubmitBtn}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.createCard}
          >
            <Text style={{color: 'white'}}>
              Submit
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
    borderRadius: 8,
    fontSize: 20,
    backgroundColor: 'orange',
    opacity: 0.3
  },
  boxSubmitBtn: {
    flex: 1,
    alignItems: 'center'
  },
  submitBtn: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3478f6',
    padding: 10,
    width: 100
  }
})

export default connect()(AddCard)
