import { StyleSheet, Text, View, FlatList, Image, Linking, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../Firebase/config'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default function BuyTab() {
  const [users, setUsers] = useState(null);
  const todoref = firebase.firestore().collection('user');
 
  useEffect(() => {
    todoref
      .onSnapshot(
        querySnapshot => {
          const users = []
          querySnapshot.forEach((doc) => {
            const { name, phone, address, quantity, price } = doc.data()
            users.push({
              id: doc.id,
              name,
              address,
              phone,
              quantity,
              price,
            })
          })
          setUsers(users)
        }
      )
  }, [])
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "yellowgreen",
          height: responsiveHeight(10),
          width: responsiveWidth(100)
        }}
      >
        <Text style={styles.text1}>Buy</Text>
      </View>
      <View style={{
        height: responsiveHeight(83),
        width: responsiveWidth(100),
      }}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                    alignSelf: "center",
                  }}
                  source={require("../assets/name.png")}
                >
                </Image>
                <Text style={styles.des1}>Name:-</Text>
                <Text style={styles.text}>{item.name}</Text>

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                    alignSelf: "center",
                  }}
                  source={require("../assets/address.png")}
                >
                </Image>
                <Text style={styles.des1}>Address:-</Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                    alignSelf: "center",
                  }}
                  source={require("../assets/price.png")}>
                </Image>
                <Text style={styles.des1}>Price:-</Text>
                <Text style={styles.text}>{item.price}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                    alignSelf: "center",
                  }}
                  source={require("../assets/quantity.png")}>
                </Image>
                <Text style={styles.des1}>Quantity:-</Text>
                <Text style={styles.text}>{item.quantity}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                    alignSelf: "center",
                  }}
                  source={require("../assets/phone.png")}>
                </Image>
                <Text style={styles.des1}>Whatsapp No:-</Text>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`whatsapp://send?phone=${item.phone}`)
                }>
                  <Text style={styles.text2}>{item.phone}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

      </View>

      {/* {users.map(item => (
                <View key={item.id}>
                    <View style={styles.view}>
                        <Text style={styles.text1}>{item.Name1}</Text>
                        <Text style={styles.des1}>{item.Des1}</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text1}>{item.Name2}</Text>
                        <Text style={styles.des1}>{item.Des2}</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text1}>{item.Name3}</Text>
                        <Text style={styles.des1}>{item.Des3}</Text>
                    </View>
                </View>



            ))} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
  },
  text: {
    textAlign: 'left',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
    fontStyle: 'italic',
  },
  address: {
    textAlign: 'left',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
    fontStyle: 'italic',
    flexDirection:'column',
    width:responsiveWidth(60)
  },
  text2: {
    textAlign: 'left',
    fontSize: responsiveFontSize(2.4),
    fontStyle: 'italic',
    color: 'white',
    paddingLeft: responsiveHeight(1),
  },
  text1: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  des1: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    color: 'black',
    padding: responsiveHeight(1.5),
    fontWeight: 'bold'
  },
  row: {
    borderBottomWidth: responsiveHeight(0.5),
    margin: responsiveHeight(0.5),
    paddingLeft: responsiveHeight(1),
    borderRightWidth: responsiveHeight(0.5),
    borderColor: 'darkblue',
  },
  button: {
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    backgroundColor: 'cadetblue',
    alignSelf: 'center',
    borderTopRightRadius: responsiveHeight(20),
    borderBottomRightRadius: responsiveHeight(20)

  }
})