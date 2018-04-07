import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Card extends Component{

  render(){
    return (
      // Put here the header with the quiz name

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{color: 'gray', fontSize: 28}}>Card 1 of n</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={{color: 'orange', fontSize: 36, fontWeight: 'bold', margin: 10, textAlign: 'center'}}>Question: Does bla bla?</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity disabled={true} style={{opacity: 0.3, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', margin: 10, width: 100, height: 40}}>
              <Text style={{color: 'white'}}>
                Correct
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity disabled={true} style={{opacity: 0.3, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', margin: 10, width: 100, height: 40}}>
              <Text style={{color: 'white'}}>
                Incorrect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', backgroundColor: '#3478f6', padding: 10, width: 100, height: 40}}>
            <Text style={{color: 'white'}}>
              See answer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Card
