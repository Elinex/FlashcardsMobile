import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import CardFront from './components/CardFront'
import { COLOR, ThemeProvider } from 'react-native-material-ui'

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        }
    }
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <CardFront />
      </ThemeProvider>
    )
  }
}
