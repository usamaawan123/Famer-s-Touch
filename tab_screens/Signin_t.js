import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  export default function SignIn_t({navigation}) {
    const Clickme=()=>{
      navigation.navigate('Welcome to Home')
    }
    const SignUP=()=>{
        navigation.navigate('Sign up')
      }
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
          placeholder="Password"
          placeholderTextColor={"white"}
          underlineColorAndroid={"black"}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={Clickme}>
          <Text style={styles.text2}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>
          Not a member?
          <TouchableOpacity onPress={SignUP}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            SIGN UP--{">"}
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
      margin: 40,
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
      height: 40,
      width: 300,
      borderWidth:1,
      borderRadius:6,
      borderColor:'white',
      color: "white",
    },
    button: {
      margin: 10,
      height: 40,
      width: 300,
      backgroundColor: "blue",
    },
  });
  