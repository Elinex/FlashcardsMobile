import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const HomeButton = (props) => {
  console.log(props);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={{color: 'white', fontSize: 20}}>HOME</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  }
})

export default HomeButton
