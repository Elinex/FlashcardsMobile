import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../utils/helpers'
import { NavigationActions } from 'react-navigation'
import HomeButton from './HomeButton'

class Score extends Component{

  static navigationOptions = ({ navigation }) => ({
    headerLeft: <HomeButton navigation={navigation}/>
  })

  restartQuiz = () => {
    const { id, deck } = this.props.navigation.state.params
    this.props.navigation.navigate('Card', { id, deck })
  }

  backToDeck = () => {
    const { id, deck } = this.props.navigation.state.params
    this.props.navigation.navigate('Deck', { id, deck })
  }

  render(){
    const { score } = this.props.navigation.state.params

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.boxText}>
          <Text style={{color: colors.darkBlue, fontSize: 30}}>Final score</Text>
          <View style={styles.score}>
            <Text style={{color: colors.orange, fontSize: 50}}>{(score*100).toFixed()}</Text>
            <Text style={{color: colors.orange, fontSize: 20}}>%</Text>
          </View>
        </View>
        <View style={styles.boxBtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.restartQuiz}>
            <Text style={styles.textBtn}>RESTART QUIZ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.backToDeck}>
            <Text style={styles.textBtn}>BACK TO DECK</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boxText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    padding: 10,
    margin: 10,
    width: 120,
    height: 50
  },
  textBtn: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Score
