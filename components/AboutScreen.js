import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Profile</Text>
      <Text style={styles.Text}>Setting</Text>
      <Text style={styles.Text}>Privacy</Text>
      <Text style={styles.Text}>About</Text>
      <Text style={styles.Text}>Story</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "cadetblue",
    flexDirection: "column",
    justifyContent: "center",
  },
  Text:{
    fontSize:40,
    fontWeight:'bold',
    fontStyle:'italic',
    borderRadius:5,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'steelblue',
    marginTop:10,
    paddingLeft:10,
    color:'black'
  }
})