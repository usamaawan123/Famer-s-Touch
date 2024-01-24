import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React,{useState,useEffect}from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({navigation}) {
  const clickhere=()=>{
    navigation.navigate('My Profile')
  }
  const clickme=()=>{
    AsyncStorage.clear()
    navigation.navigate('Sign In')
  }
  const[name,setname]=useState('')
  useEffect(() => {
    getData();
  }, []);
  const getData = async() => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          setname(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/madni.png")}
      ></Image>
      <Text style={{fontSize:40,fontStyle:'italic',textAlign:'center'}}>Welcome {name}</Text>
      <TouchableOpacity style={styles.button} onPress={clickhere}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          About Me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={clickme}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cadetblue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "Center",
    textDecorationColor: "blue",
  },
  image:{
    height:150,
    width:200,
    alignSelf:'center',
    marginTop:50
  },
  button: {
    height: 40,
    width: 300,
    backgroundColor: "steelblue",
    borderColor: "black",
    borderWidth: 2,
    marginTop:300,
    alignSelf:'center'
  },
  button1: {
    height: 40,
    width: 300,
    backgroundColor: "steelblue",
    borderColor: "black",
    borderWidth: 2,
    marginTop:10,
    alignSelf:'center'
  }
});
