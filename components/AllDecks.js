import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { STORAGE_KEY } from '../utils/api'
import { connect } from 'react-redux'

class AllDecks extends Component{

  componentDidMount(){
    AsyncStorage.getItem(STORAGE_KEY, (err, res) => {
      console.log(res)
    })
  }

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

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(AllDecks)
