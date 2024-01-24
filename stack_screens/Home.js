import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import React,{useEffect} from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function Home({ navigation }) {
  useEffect(() => {
    const beforeRemoveListener = navigation.addListener('beforeRemove', (e) => {
      // Prevent the screen from being removed
      e.preventDefault();
    });

    // Clean up the listener when the component is unmounted
    return () => beforeRemoveListener();
  }, [navigation]);
  const Click = () => {
    navigation.navigate("Prediction");
  };
  const Weather = () => {
    navigation.navigate("Weather");
  };
  const Medicines = () => {
    navigation.navigate("Medicines");
  };
  const BuySell = () => {
    navigation.navigate("BuySell");
  };
  const drawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "yellowgreen",
          height: responsiveHeight(40),
          width: responsiveWidth(100),
          borderBottomRightRadius: responsiveHeight(10),
          borderBottomLeftRadius: responsiveHeight(10)
        }}
      >
        <TouchableOpacity onPress={drawer}>
          <Image
            style={{
              height: responsiveHeight(4),
              width: responsiveWidth(8),
              alignSelf: "flex-start",
              marginTop: responsiveHeight(5),
              marginLeft: responsiveHeight(2)
            }}
            source={require("../assets/drawer.png")}
          ></Image>
        </TouchableOpacity>
        <Image
          style={{
            height: 120,
            width: 120,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 50,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 50
          }}
          source={require("../assets/agricultural.png")}
        ></Image>
        <Text style={styles.text1}>Welcome to Farmer's Touch</Text>
      </View>

      <View style={{ height: responsiveHeight(60), width: responsiveWidth(100) }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: responsiveHeight(8),
          }}
        >
          <TouchableOpacity style={styles.button1} onPress={Medicines}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
              source={require("../assets/crop_medicine.png")}
            ></Image>
            <Text style={styles.text}>Medicines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={Weather}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
              source={require("../assets/cloudy.png")}
            ></Image>
            <Text style={styles.text}>Weather</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button3} onPress={Click}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
              source={require("../assets/crop.png")}
            ></Image>
            <Text style={styles.text}>Crop Disease</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4} onPress={BuySell}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }} npm
              source={require("../assets/buy.png")}

            ></Image>

            <Text style={styles.text}>Buy & Sell</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View
        style={{
          height: responsiveHeight(10),
          width: responsiveWidth(100),
          borderTopStartRadius: responsiveWidth(10),
          borderTopRightRadius: responsiveWidth(10),
          backgroundColor: "yellowgreen",
          justifyContent: "center",
        }}
      >
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent: "center",
  },
  button1: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderTopStartRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  button2: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderTopRightRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  button3: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderBottomLeftRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  button4: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderBottomRightRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  text: {
    fontSize: responsiveFontSize(2),
    color: "black",
    textAlign: "center",
  },
  text1: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    paddingTop: responsiveHeight(3),
    color: 'white'
  }
});
