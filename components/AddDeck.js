import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

class AddDeck extends Component{
  state = {
    deckTitle: ''
  }

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center',}}>
        <TextInput
          style={{height: 80, margin: 15, textAlign: 'center', borderRadius: 8, borderWidth: 0.5, borderColor: 'grey', fontSize: 26}}
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
          placeholder='Insert here the title of a new deck'
          autoCapitalize='sentences'
          underlineColorAndroid='white'
          multiline = {true}
        />
      </View>
    )
  }
}


export default AddDeck
