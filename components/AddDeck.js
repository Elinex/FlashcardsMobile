import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'

class AddDeck extends Component{

  state = {
    deckTitle: ''
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.boxTextInput}>
          <TextInput
            style={styles.textInput}
            onChangeText={(deckTitle) => this.setState({deckTitle})}
            value={this.state.deckTitle}
            placeholder='Insert here the title of a new deck'
            placeholderTextColor='white'
            autoCapitalize='sentences'
            underlineColorAndroid='white'
          />
        </View>
        <View style={styles.boxSubmitBtn}>
          <TouchableOpacity style={styles.submitBtn}>
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
    borderRadius: 8,
    fontSize: 20,
    backgroundColor: 'orange',
    opacity: 0.3
  },
  boxSubmitBtn: {
    flex: 1,
    justifyContent: 'flex-start',
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

export default AddDeck
