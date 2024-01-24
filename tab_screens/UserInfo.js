import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserInfo({ navigation }) {
  const [name, setName] = useState("");
  const Clickme = () => {
    try {
      AsyncStorage.setItem("name1", name);
      navigation.navigate("My Favourites");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(name) => setName(name)}
        value={name}
        placeholderTextColor={"black"}
        underlineColorAndroid={"black"}
      ></TextInput>
      <TouchableOpacity onPress={Clickme} style={styles.button}>
        <Text style={styles.text}>Add Title</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
  },
  input: {
    margin: 10,
    paddingLeft: 10,
    alignSelf: "center",
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "black",
    color: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  button: {
    height: 40,
    width: 200,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    alignSelf: "center",
  },
});
