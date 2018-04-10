import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { STORAGE_KEY } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../redux/actions'

class AllDecks extends Component{

  componentDidMount(){
    AsyncStorage.getItem(STORAGE_KEY, (err, res) => {
      this.props.dispatch(getDecks(JSON.parse(res)))
    })
  }

  render(){
    console.log('ALLDECKS: ', this.props);

    const { decks } = this.props

    const text = (item) => {
      return (
        <View>
          <Text>{item}</Text>
        </View>
        
        // <View style={styles.boxText}>
        //   <TouchableOpacity
        //     // onPress={() => this.props.navigation.navigate('Deck')}
        //   >
        //     <Text style={styles.textDeck}>{item.deck}</Text>
        //   </TouchableOpacity>
        //   <Text style={styles.textCards}>n cards</Text>
        // </View>
      )
    }

    return (
      <View style={styles.container}>
        {(decks !== undefined) && (
          <FlatList
            data={Object.keys(decks)}
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
    decks: state.decks
  }
}

export default connect(mapStateToProps)(AllDecks)
