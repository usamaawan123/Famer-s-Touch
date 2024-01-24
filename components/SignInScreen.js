import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
export default function SignIn_Screen({ navigation }) {
  const [username, setusername] = useState("");
  const [Password, setpassword] = useState("");

  const clickhere = async () => {
    if (username.length == 0 || Password.length == 0) {
      alert("empty value");
    } else {
      try {
        await AsyncStorage.setItem("UserData", username);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
    <View>
        <Image style={styles.image} source={require("../assets/madnilogo.png")}></Image>
      <TextInput
        placeholder="Enter Username"
        style={styles.input1}
        onChangeText={(username) => setusername(username)}
        value={username}
      ></TextInput>
      <TextInput
        placeholder="Enter Password"
        style={styles.input2}
        onChangeText={(Password) => setpassword(Password)}
        value={Password}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={clickhere}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "cadetblue",
    flex: 1,
    flexDirection: "column",
    textDecorationColor: "blue",
  },
  input1: {
    height: 50,
    width: 300,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    paddingLeft: 10,
    alignSelf:'center',
    marginTop:90
  },
  input2: {
    height: 50,
    width: 300,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    paddingLeft: 10,
    alignSelf:'center',
    marginTop:10
  },
  button: {
    height: 40,
    width: 300,
    backgroundColor: "steelblue",
    borderColor: "black",
    borderWidth: 2,
    alignSelf:'center',
    marginTop:50
  },
  image:{
    height:200,
    width:250,
    alignSelf:'center',
    marginTop:70
  }
});
