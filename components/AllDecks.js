import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

class AllDecks extends Component{

  render(){

    const text = (item) => {
      return (
        <View style={styles.boxText}>
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate('Deck')}
          >
            <Text style={styles.textDeck}>{item.deck}</Text>
          </TouchableOpacity>
          <Text style={styles.textCards}>n cards</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'},
            {deck: 'Deck1'}
          ]}
          renderItem={({item}) => text(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 10,
   paddingBottom: 10
  },
  boxText: {
    flex: 1,
    margin: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'orange'
  },
  textDeck: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold'
  },
  textCards: {
    color: 'gray',
    fontSize: 20
  }
})

export default AllDecks
