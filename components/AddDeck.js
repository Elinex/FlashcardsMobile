import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'
import { guid } from '../utils/helpers'
import { connect } from 'react-redux'
import { addDeck } from '../redux/actions'
import { addDeckAPI } from '../utils/api'
import { colors } from '../utils/helpers'

class AddDeck extends Component{

  state = {
    deckTitle: ''
  }

  createDeck = () => {
    const { deckTitle } = this.state
    const id = 'id' + guid()
    let deck = {
      title: deckTitle,
      cards: []
    }
    if (deckTitle === '') {
      alert('Insert title')
    } else {
      addDeckAPI(id, deck)
      this.props.dispatch(addDeck(id, deck))
      this.props.navigation.navigate('Deck', { id, deck })
    }
  }

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.boxTextInput}>
          <TextInput
            style={styles.textInput}
            onChangeText={(deckTitle) => this.setState({deckTitle})}
            value={this.state.deckTitle}
            placeholder='Insert the deck title'
            placeholderTextColor={colors.darkBlue}
            autoCapitalize='sentences'
            underlineColorAndroid={colors.orange}
            maxLength={20}
          />
        </View>
        <View style={styles.boxSubmitBtn}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.createDeck}
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
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  boxTextInput: {
    flex: 1,
    justifyContent: 'flex-end'
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
    justifyContent: 'flex-start',
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

export default connect()(AddDeck)
