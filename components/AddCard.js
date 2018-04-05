import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'

class AddCard extends Component{
  state = {
    question: '',
    answer: ''
  }

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'stretch',}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TextInput
            style={{height: 80, margin: 15, textAlign: 'center', borderRadius: 8, fontSize: 20, backgroundColor: '#87cefa'}}
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
            style={{height: 80, margin: 15, textAlign: 'center', borderRadius: 8, fontSize: 20, backgroundColor: '#87cefa'}}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder='Insert answer'
            placeholderTextColor='white'
            autoCapitalize='sentences'
            underlineColorAndroid='white'
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', backgroundColor: '#3478f6', padding: 10, width: 100}}>
            <Text style={{color: 'white'}}>
              Add Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default AddCard
