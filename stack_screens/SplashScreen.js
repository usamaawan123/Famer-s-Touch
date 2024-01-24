import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { useEffect } from "react";
import React from "react";

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Sign In')
        },1000);
     
    }, [])
    
  return (
    <View style={{ height: "100%", width: "100%",backgroundColor:'aliceblue',justifyContent:'center' }}>
          <Image
            style={{
              height: 120,
              width: 120,
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 90,
              backgroundColor:'white',
              borderBottomRightRadius:50,
              borderTopLeftRadius:50
            }}
            source={require("../assets/agricultural.png")}
          ></Image>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "seagreen",
              textAlign: "center",
              marginTop:40
            }}
          >
            Farmer's Touch
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
