import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../Firebase/config'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default function RiceMed() {
    const [users, setUsers] = useState(null);
    const todoref = firebase.firestore().collection('Rice')
    useEffect(() => {
        todoref
            .onSnapshot(
                querySnapshot => {
                    const users = []
                    querySnapshot.forEach((doc) => {
                        const { Name1, Des1, Name2, Des2, Name3, Des3, Name4, Name5, Name6, Des4, Des5, Des6 } = doc.data()
                        users.push({
                            id: doc.id,
                            Name1,
                            Des1,
                            Name2,
                            Des2,
                            Name3,
                            Des3,
                            Name4,
                            Des4,
                            Name5,
                            Des5,
                            Name6,
                            Des6,
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
                    width: responsiveWidth(100),
                }}
            >
                <Text style={styles.text2}>Medicines</Text>
            </View>
            <View style={{
                height: responsiveHeight(90),
                width: responsiveWidth(100),
                marginTop: responsiveFontSize(1),
            }}>
                <Text style={styles.product}>Chemicals Names</Text>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <ScrollView horizontal={true}>

                                <Text style={styles.text1}>{item.Name1}</Text>
                                <Text style={styles.text1}>{item.Name2}</Text>
                                <Text style={styles.text1}>{item.Name3}</Text>
                                <Text style={styles.text1}>{item.Name4}</Text>
                                <Text style={styles.text1}>{item.Name5}</Text>
                                <Text style={styles.text1}>{item.Name6}</Text>

                            </ScrollView>
                            <Text style={styles.product}>Products List</Text>
                            <ScrollView horizontal={true}>
                                <Image
                                    style={{
                                        height: responsiveHeight(30),
                                        width: responsiveHeight(10),
                                        alignSelf: "center",
                                        marginLeft: responsiveHeight(1),
                                        borderRadius:responsiveHeight(4)
                                    }}
                                    source={require("../assets/CropMed/Medicine1.png")}
                                ></Image>
                                <Image
                                    style={{
                                        height: responsiveHeight(30),
                                        width: responsiveHeight(10),
                                        alignSelf: "center",
                                        marginLeft: responsiveHeight(1),
                                        borderRadius: responsiveHeight(4)


                                    }}
                                    source={require("../assets/CropMed/Medicine6.png")}
                                ></Image>
                                <Image
                                    style={{
                                        height: responsiveHeight(30),
                                        width: responsiveHeight(23),
                                        alignSelf: "center",
                                        marginLeft: responsiveHeight(1),
                                        borderRadius: responsiveHeight(4)


                                    }}
                                    source={require("../assets/CropMed/Medicine3.png")}
                                ></Image>
                                <Image
                                    style={{
                                        height: responsiveHeight(30),
                                        width: responsiveHeight(20),
                                        alignSelf: "center",
                                        marginLeft: responsiveHeight(1),
                                        borderRadius: responsiveHeight(4)


                                    }}
                                    source={require("../assets/CropMed/Medicine4.png")}
                                ></Image>
                                <Image
                                    style={{
                                        height: responsiveHeight(30),
                                        width: responsiveHeight(20),
                                        alignSelf: "center",
                                        marginLeft: responsiveHeight(1),
                                        borderRadius: responsiveHeight(4)


                                    }}
                                    source={require("../assets/CropMed/Medicine5.png")}
                                ></Image>
                                <Image
                                    style={{
                                        height: responsiveHeight(25),
                                        width: responsiveHeight(15),
                                        alignSelf: "center",
                                        marginLeft: responsiveHeight(1),
                                        borderRadius: responsiveHeight(4)
                                    }}
                                    source={require("../assets/CropMed/Medicine2.png")}
                                ></Image>

                            </ScrollView>
                            <Text style={styles.product}>How to Apply</Text>
                            <ScrollView>
                                <Text style={styles.des1}>{item.Des1}</Text>
                                <Text style={styles.des1}>{item.Des2}</Text>
                                <Text style={styles.des1}>{item.Des3}</Text>
                                <Text style={styles.des1}>{item.Des4}</Text>
                                <Text style={styles.des1}>{item.Des5}</Text>
                                <Text style={styles.des1}>{item.Des6}</Text>

                            </ScrollView>

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
    text1: {
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(3),
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'yellowgreen',
        padding: responsiveHeight(1),
        marginLeft: responsiveHeight(1),
        borderRadius: responsiveHeight(10)
    },
    text2: {
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(4),
        color: 'white',
        textAlign: 'center'
    },
    des1: {
        margin: responsiveHeight(0.8),
        fontSize: responsiveFontSize(2.5),
        color: 'white',
        padding: responsiveHeight(1),
        backgroundColor:'yellowgreen',
        textAlign:'center'
    },
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: responsiveHeight(.4),
        margin: responsiveHeight(0.5)
    },
    product: {
        fontSize: responsiveFontSize(3),
        fontWeight: '900',
        textAlign: 'center',
        marginTop:responsiveHeight(1),
        marginBottom:responsiveHeight(1)


    }
})