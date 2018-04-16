import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Animated
} from 'react-native'
import { STORAGE_KEY } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../redux/actions'
import { colors } from '../utils/helpers'

class AllDecks extends Component{
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount(){
    const { opacity } = this.state
    Animated.timing(opacity, {toValue: 1, duration: 2000}).start()

    AsyncStorage.getItem(STORAGE_KEY, (err, res) => {
      this.props.dispatch(getDecks(JSON.parse(res)))
    })

    // AsyncStorage.removeItem(STORAGE_KEY)
  }



  render(){
    
    const { decks } = this.props
    const { opacity } = this.state

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
        {decks && (
          <FlatList
            data={Object.keys(decks).map(deck => {
              return [deck, decks[deck]]
            })}
            renderItem={({item}) => text(item)}
          />
        )}
        {((decks === undefined) || (decks === null)) && (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Animated.Text style={[{opacity}, styles.textIntro]}>
              Flash
            </Animated.Text>
            <Animated.Text style={[{opacity}, styles.textIntro]}>
              Cards
            </Animated.Text>
            <Animated.Text style={[{opacity}, styles.textCards]}>
              Add a deck to start a quiz
            </Animated.Text>
          </View>
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
  },
  textIntro: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    fontSize: 40
  }
})

function mapStateToProps(state){
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(AllDecks)
