import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

class Deck extends Component{
  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'orange', fontSize: 30, fontWeight: 'bold'}}>Deck Title</Text>
          <Text style={{color: 'gray', fontSize: 20}}>Number of cards</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', backgroundColor: '#3478f6', padding: 10, margin: 10, width: 100, height: 40}}>
            <Text style={{color: 'white'}}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', backgroundColor: '#3478f6', padding: 10, margin: 10, width: 100, height: 40}}>
            <Text style={{color: 'white'}}>Add Cards</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Deck
