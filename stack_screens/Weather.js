import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import * as Location from 'expo-location';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '70a3691440d7a3879d19ffd884e89bfa';
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      getWeatherData(latitude, longitude);
    })();

  }, []);
  console.log(weatherData)
  const getWeatherData = (latitude, longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data.list.filter((_, i) => i % 8 == 0));
      })
      .catch(error => console.error(error));
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:responsiveFontSize(3),textAlign:'center'}}>Loading...</Text>
      </View>
    );
  };
  function renderItem({ item }) {
    const { dt, weather, main } = item;
    const date = new Date(dt*1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const iconUrl = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

    return (
    <View>
        <View style={{flex:1}}>
          <Text style={styles.day}>{dayOfWeek}</Text>
        </View>
        <View style={styles.listItem}>
          <Image style={styles.icon} source={{ uri: iconUrl }} />
          <Text style={styles.temperature}>Temperature:-{main.temp}°C</Text>
          <Text style={styles.temperature}>feels_like:-{main.feels_like}°C</Text>
        </View>
      </View>


    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              style={{
                height: responsiveHeight(15),
                width: responsiveWidth(25),
                alignSelf: "flex-start",
                marginTop: responsiveHeight(4)
              }}
              source={require("../assets/hot.png")}
            ></Image>
          </View>
          <View>
            <Text style={styles.text}>Weather Forecast</Text>
            <Text style={styles.text1}>Daily @ Upcoming Week</Text>
          </View>

        </View>
      </View>
      <View style={styles.view2}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt.toString()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent:'center'
  },
  listItem: {
    flex:2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    borderBottomWidth: responsiveHeight(.4),
    borderColor: 'black',
  },
  day: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign:'center'
  },
  icon: {
    width: responsiveHeight(8),
    height: responsiveHeight(8),
  },
  temperature: {
    fontSize:responsiveFontSize(2),
    fontWeight: 'bold',
  },
  view1: {
    height: responsiveHeight(30),
    width: responsiveWidth(100),
    backgroundColor: 'yellowgreen',
    paddingTop: responsiveHeight(2),
    borderBottomRightRadius: responsiveHeight(7),
    borderBottomLeftRadius: responsiveHeight(7),
  },
  view2: {
    height: responsiveHeight(70),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    marginTop: responsiveHeight(2)
  },
  text: {
    fontSize: responsiveFontSize(4),
    color: "white",
    marginTop: responsiveHeight(7),
    marginLeft: responsiveHeight(3)
  },
  text1: {
    fontSize: responsiveFontSize(3),
    color: "white",
    margin: responsiveHeight(2)
  }
})
export default Weather;
