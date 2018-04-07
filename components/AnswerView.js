import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Card from './Card'

class AnswerView extends Component{
  state = {
    seeCard: false
  }

  showCard = () => {
    this.setState({
      seeCard: true
    })
  }

  render(){
    
    if (this.state.seeCard === true){
      return <Card />
    }

    return (
      // Put here the header with the quiz name
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{color: 'gray', fontSize: 28, margin: 10}}>Card 1 of n</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={{color: 'orange', fontSize: 36, fontWeight: 'bold', margin: 10, textAlign: 'center'}}>Answer: Yes!!!!</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', margin: 10, width: 100, height: 40}}>
              <Text style={{color: 'white'}}>
                Correct
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity style={{borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', margin: 10, width: 100, height: 40}}>
              <Text style={{color: 'white'}}>
                Incorrect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={{borderRadius: 8, alignItems: 'center', backgroundColor: '#3478f6', padding: 10, width: 100, height: 40}}
            onPress={this.showCard}
          >
            <Text style={{color: 'white'}}>
              See Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default AnswerView
