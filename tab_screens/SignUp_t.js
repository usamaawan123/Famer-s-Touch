import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
export default function SignUp_t({ navigation }) {
  const [checked, setChecked] = useState("first");

  const Clickme = () => {
    navigation.navigate("Welcome to Home");
  };
  const SignIN = () => {
    navigation.navigate("Sign In");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/log.png")}></Image>
      <Text style={{ color: "white" }}>Welcome To</Text>
      <Text style={styles.text1}>OctoBox</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        keyboardType="default"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        secureTextEntry={true}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        secureTextEntry={true}
      ></TextInput>
      <Text style={styles.text2}>Sign Up</Text>
      <RadioButton
        value="first"
        color="black"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={()=>setChecked('first')}
      />
      <Text style={styles.text2}>Sign In</Text>
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={()=>setChecked('second')}
        color='red'
      />
      <Text style={{ color: "white" }}>
        Already a member?
        <TouchableOpacity onPress={SignIN}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            SIGN IN--{">"}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    margin: 20,
    width: 100,
    height: 100,
  },
  text1: {
    fontSize: 40,
    fontStyle: "normal",
    color: "white",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  input: {
    margin: 10,
    height: 60,
    width: 300,
    color: "white",
    borderWidth: 3,
    borderRadius: 6,
    borderColor: "blue",
  },
  button: {
    margin: 10,
    height: 40,
    width: 300,
    backgroundColor: "blue",
  },
});
