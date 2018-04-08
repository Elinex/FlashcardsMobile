import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component{
  static navigationOptions = {
    title: 'Deck title',
  }

  render(){
    const { id } = this.props
    const { title } = this.props.decks[id]

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.cardsNumber}>n cards</Text>
        </View>
        <View style={styles.boxBtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Card')}
          >
            <Text style={{color: 'white'}}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddCard')}
          >
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

function mapStateToProps(decks, { navigation }){
  const { id } = navigation.state.params
  return {
    id,
    decks: decks.filter(deck => Object.keys(deck)[0] === id).reduce((element) => {
      return element
    })
  }
}

export default connect(mapStateToProps)(Deck)
