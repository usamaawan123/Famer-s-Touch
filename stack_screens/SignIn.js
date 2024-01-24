import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useState } from "react";
export default function Signin({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Clickme = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Welcome to Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const SignUP = () => {
    navigation.navigate("Sign up");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/agricultural.png")}
      ></Image>
      <Text style={styles.text1}>Farmer's Touch</Text>
      <TextInput
        style={styles.input2}
        placeholder="Email"
        onChangeText={(email) => setemail(email)}
        value={email}
        placeholderTextColor={"black"}
        keyboardType="default"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={styles.input2}
        placeholder="password"
        onChangeText={(password) => setpassword(password)}
        value={password}
        placeholderTextColor={"black"}
        secureTextEntry={true}
        autoCapitalize="none"
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={Clickme}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              height: responsiveHeight(5),
              width: responsiveWidth(10),
              alignSelf: "flex-start",
            }}
            source={require("../assets/user.png")}
          ></Image>
          <Text style={styles.text2}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: responsiveFontSize(3) }}>
        Not a member?
        <TouchableOpacity onPress={SignUP}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: responsiveFontSize(2),
            }}
          >
            SIGN UP--{">"}
          </Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent: 'center',
    alignItems: 'center'

  },
  image: {
    marginTop: responsiveHeight(5),
    width: responsiveWidth(30),
    height: responsiveHeight(15),
  },
  text1: {
    fontSize: responsiveFontSize(5),
    fontStyle: "normal",
    color: "seagreen"
  },
  text2: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    paddingLeft: responsiveWidth(10),
  },
  input1: {
    marginTop: responsiveHeight(5),
    paddingLeft: responsiveWidth(2),
    height: responsiveHeight(10),
    width: responsiveWidth(90),
    borderBottomWidth: responsiveWidth(0.5),
    borderLeftWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
    borderColor: "#26c485",
    color: "black",
  },
  input2: {
    marginTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(2),
    height: responsiveHeight(10),
    width: responsiveWidth(90),
    borderBottomWidth: responsiveWidth(0.5),
    borderLeftWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
    borderColor: "#26c485",
    color: "black",
  },
  button: {
    margin: responsiveHeight(3),
    height: responsiveHeight(5),
    width: responsiveWidth(60),
    borderBottomRightRadius: responsiveWidth(90),
    borderRightColor: "#26c485",
    borderRightWidth: responsiveWidth(5),
    borderBottomWidth: responsiveWidth(.5),
    borderBottomColor: "#26c485",
    backgroundColor: "white",
  },
});
