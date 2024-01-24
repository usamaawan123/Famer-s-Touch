import { StyleSheet, View, TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function home_t({navigation}) {
  const[name,setname]=useState("");
  const Clickme=async()=>{
    await AsyncStorage.setItem("name1",name);
    navigation.navigate('My Favourites')
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Name'
      onChangeText={(name)=>setname(name)} value={name}></TextInput>
      <TouchableOpacity onPress={Clickme} style={{height:50,width:150,justifyContent:'center',backgroundColor:'blue'}}>Click Me
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  input: {
    margin: 10,
    paddingLeft: 10,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "black",
    color: "white",
  }
});