import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function Namaz() {
  const [prayer, setprayer] = useState("");
  const [location, setLocation] = useState(null);
  const [lat, setlat] = useState();
  const [lon, setlon] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [Address, setAddress] = useState(null);

  const click = async () => {
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
  const Click = () => {
    alert(text);
  };
  const GetAddress = async () => {
    const getaddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    let address = getaddress;
    setAddress(address);
    return getaddress;
  };
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(Address);
  }
  const getPrayerTime = async () => {
    const ResposeType = {
      method: "Get",
    };
    try {
      const response = await fetch(
        "http://api.aladhan.com/v1/calendar?latitude=32.585411&longitude=71.54361700000004&method=2&month=12&year=2022.json",
        getPrayerTime
      );
      const json = await response.json();

      setprayer(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPrayerTime();
    GetAddress();
  }, []);
  console.log(prayer);

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 100, width: 160, alignSelf: "center", marginTop: 10 }}
        source={require("../assets/namaz.png")}
      ></Image>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          margin: 10,
          color: "white",
        }}
      >
        Current Monthly Timings
      </Text>
      <FlatList
        data={prayer}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item1}>Date:-{item.date.readable}</Text>
            <Text style={styles.item}>Fajar:-{item.timings.Fajr}</Text>
            <Text style={styles.item}>Dhuhr:-{item.timings.Dhuhr}</Text>
            <Text style={styles.item}>Asr:-{item.timings.Asr}</Text>
            <Text style={styles.item}>Maghrib:-{item.timings.Maghrib}</Text>
            <Text style={styles.item}>Isha:-{item.timings.Isha}</Text>
          </View>
        )}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button} onPress={click}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Get My Address
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Click}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Show My Address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    marginLeft: 13,
    width: "45%",
  },
  item: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderWidth: 2,
    borderRadius: 40,
    padding: 10,
    margin: 10,
    borderColor: "black",
  },
  item1: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderWidth: 5,
    margin: 5,
    padding: 5,
    borderColor: "white",
  },
});
