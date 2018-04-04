import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

class AddDeck extends Component{
  state = {
    deckTitle: ''
  }

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch',}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TextInput
            style={{height: 80, margin: 15, textAlign: 'center', borderRadius: 8, fontSize: 20, backgroundColor: '#87cefa'}}
            onChangeText={(deckTitle) => this.setState({deckTitle})}
            value={this.state.deckTitle}
            placeholder='Insert here the title of a new deck'
            placeholderTextColor='white'
            autoCapitalize='sentences'
            underlineColorAndroid='white'
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', backgroundColor: '#3478f6', padding: 10, width: 100}}>
            <Text style={{color: 'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}


export default AddDeck
