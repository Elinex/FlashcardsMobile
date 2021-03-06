import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { colors } from '../utils/helpers'
import { Entypo } from '@expo/vector-icons'
import HomeButton from './HomeButton'

class Deck extends Component{
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <HomeButton navigation={navigation}/>
  })

  actions = () => {
    const { id, deck } = this.props.navigation.state.params
    this.props.navigation.navigate('Card', { id, deck })
  }

  showBtn = () => {
    const { deck } = this.props.navigation.state.params
    if (deck.cards.length > 0){
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={this.actions}>
          <Text style={{color: colors.white, fontSize: 16}}>START QUIZ</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={[styles.button, {opacity: 0.6}]}
          disabled={true}>
          <Text style={{color: colors.white, fontSize: 16}}>START QUIZ</Text>
        </TouchableOpacity>
      )
    }
  }

  render(){

    const { id, deck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>{deck.title}</Text>
          <Text style={styles.cardsNumber}>{deck.cards.length} cards</Text>
        </View>
        <View style={styles.boxBtn}>
          {this.showBtn()}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddCard', { id, deck })}>
            <Text style={{color: colors.white, fontSize: 16}}>ADD CARD</Text>
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
    color: colors.gray,
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardsNumber: {
    color: colors.orange,
    fontSize: 22,
    margin: 10
  },
  boxBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    padding: 10,
    margin: 10,
    width: 120,
    height: 40
  }
})

export default connect()(Deck)
