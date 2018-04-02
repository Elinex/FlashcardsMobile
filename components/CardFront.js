import React, { Component } from 'react'
import { Toolbar, Subheader, Card, Button } from 'react-native-material-ui'
import { View, Text } from 'react-native'


class CardFront extends Component{
  state = {
    showAnswer: false
  }

  render(){
    return (
      <View>
        <Toolbar
          leftElement="menu"
          centerElement="Quiz"
        />
        <View>
          <Subheader text='deck titleX' style={{container: {alignItems: 'center'}, text: {fontSize: 20}}}/>
          <Subheader text='card 1 of n' style={{container: {alignItems: 'center'}, text: {fontSize: 18}}}/>
        </View>

        {!this.state.showAnswer && (
          <View>
            <View style={{marginLeft: 30, marginRight: 30}}>
              <Card>
                <Text style={{textAlign: 'center', fontSize: 30}}>Does react native work with android?</Text>
              </Card>
            </View>
            <View>
              <Button disabled text='correct' />
              <Button disabled text='incorrect' />
            </View>
            <View>
              <Button primary text='see answer' onPress={() => (this.setState({showAnswer: true}))}/>
            </View>
          </View>
        )}

        {this.state.showAnswer && (
          <View>
            <Card>
              <Text style={{textAlign: 'center', fontSize: 30}}>Yes, it works!</Text>
            </Card>
            <View>
              <Button primary text='correct' />
              <Button accent text='incorrect' />
            </View>
          </View>
        )}
      </View>
    )
  }
}


export default CardFront
