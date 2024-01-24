import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const AboutScreen = ({navigation}) => {
  const drawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "yellowgreen",
          height: responsiveHeight(10),
          width: responsiveWidth(100),
          flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={drawer} >
          <Image
            style={{
              height: responsiveHeight(4),
              width: responsiveWidth(8),
              marginTop: responsiveHeight(5),
              marginLeft: responsiveHeight(2)
            }}
            source={require("../assets/drawer.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.text1}>About</Text>
      </View>
      <View style={{ height: responsiveHeight(70), width: responsiveWidth(100) }}>
        <Text style={styles.title}>Farmer's Touch</Text>
        <Text style={styles.description}>
          Welcome to our Farmer's Touch App and Disease Detection App. This app is designed to assist farmers in monitoring their crops and detecting diseases early on.
        </Text>
        <Text style={styles.sectionTitle}>Reason:-</Text>
        <Text style={styles.sectionDescription}>
          The Farmers App provides features such as crop tracking, weather updates, and tips for better crop management. It aims to empower farmers with information that can enhance their agricultural practices.
        </Text>
        <Text style={styles.sectionTitle}>Utilization:-</Text>
        <Text style={styles.sectionDescription}>
          The Disease Detection App utilizes advanced image processing techniques to identify potential diseases in crops. Farmers can upload images of their crops, and the app will analyze them to detect any signs of diseases. Early detection can help farmers take timely actions to prevent widespread damage.
        </Text>
      </View>
      <View
        style={{
          height: responsiveHeight(20),
          width: responsiveWidth(100),
          borderTopStartRadius: responsiveWidth(10),
          borderTopRightRadius: responsiveWidth(10),
          backgroundColor: "yellowgreen",
          justifyContent: "center",
        }}
      >
        <Text style={styles.footer}>© 2023 Farmers App and Disease Detection App</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent: "center",
  },
  text1: {
    textAlign: 'center',
    fontSize: responsiveFontSize(5),
    paddingTop: responsiveHeight(4),
    color: 'white',
    paddingLeft:responsiveHeight(12)
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    margin: responsiveHeight(1),
    textAlign:'center'
  },
  description: {
    fontSize: responsiveFontSize(2),
    margin: responsiveHeight(1),
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    margin: responsiveHeight(1),
    textAlign:'center',
  },
  sectionDescription: {
    fontSize: responsiveFontSize(2),
    margin: responsiveHeight(1),
    textAlign: 'center',

  },
  footer: {
    marginTop: responsiveHeight(6),
    textAlign: 'center',
    color: '#888',
    fontWeight: 'bold'
  }
})
export default AboutScreen;
