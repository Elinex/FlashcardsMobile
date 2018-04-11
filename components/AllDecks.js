import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { STORAGE_KEY } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../redux/actions'
import { colors } from '../utils/helpers'

class AllDecks extends Component{

  componentDidMount(){
    AsyncStorage.getItem(STORAGE_KEY, (err, res) => {
      this.props.dispatch(getDecks(JSON.parse(res)))
    })
  }

  render(){

    const { decks } = this.props

    const text = (item) => {
      return (
        <View style={styles.boxText}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Deck', {id: item[0], deck: item[1]})}
          >
            <Text style={styles.textDeck}>{item[1].title}</Text>
          </TouchableOpacity>
          <Text style={styles.textCards}>{item[1].cards.length} cards</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {(decks && (decks.length > 0)) && (
          <FlatList
            data={Object.keys(decks).map(deck => {
              return [deck, decks[deck]]
            })}
            renderItem={({item}) => text(item)}
          />
        )}
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
    borderBottomColor: colors.darkBlue
  },
  textDeck: {
    fontSize: 28,
    color: colors.gray,
    fontWeight: 'bold'
  },
  textCards: {
    color: colors.orange,
    fontSize: 18
  }
})

function mapStateToProps(state){
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(AllDecks)
