import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class Deck extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Deck Title</Text>
          <Text style={styles.cardsNumber}>n cards</Text>
        </View>
        <View style={styles.boxBtn}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Add Cards</Text>
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
    alignItems: 'center'
  },
  text: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardsNumber: {
    color: 'gray',
    fontSize: 22,
    margin: 10
  },
  boxBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3478f6',
    padding: 10,
    margin: 10,
    width: 100,
    height: 40
  }
})

export default Deck
