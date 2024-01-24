import React, { useState ,useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView,{Marker} from "react-native-maps";

import * as Location from "expo-location";

const Settings = () => {
  const [location, setLocation] = useState(null);
  const [lat, setlat] = useState();
  const [lon, setlon] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const[address,setAddress]=useState(null);

  
  const Click = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
  
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setlat(lat);
    setlon(lon);
    GetAddress();
  };
 const GetAddress=async()=>{
  const getaddress=await Location.reverseGeocodeAsync({
    longitude:location.coords.longitude,
    latitude:location.coords.latitude
  })
  let address=getaddress;
  setAddress(address);
  return getaddress
 }
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(address);
  }

  return (
    <View style={styles.mainBox}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          borderWidth: 2,
          height: 35,
          width: 200,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Google Maps
      </Text>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsCompass={true}
        showsMyLocationButton={true}
      >
        <Marker coordinate={{latitude:33.7804525,longitude:72.3519494}}></Marker>
      </MapView>
      <Text
        style={{
          fontSize: 15,
          borderWidth: 2,
          height: 90,
          width: "99%",
          padding: 5,
          margin: 10,
        }}
      >
        {text}
      </Text>
      <TouchableOpacity style={styles.button} onPress={Click}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Get My Address
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: "azure",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    width: "50%",
  },
  map: {
    width: "95%",
    height: "60%",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Settings;
