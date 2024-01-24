import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function Medicines({ navigation }) {
    const Rice= () => {
        navigation.navigate("RiceMed");
    };
    const Potato = () => {
        navigation.navigate("Potato");
    };
    const Corn= () => {
        navigation.navigate("Corn");
    };
    const Wheat = () => {
        navigation.navigate("Corn");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: "yellowgreen",
                    height: responsiveHeight(10),
                    width: responsiveWidth(100)
                }}
            >
                <Text style={styles.text1}>Medicines</Text>
            </View>
            <View style={{ height: responsiveHeight(60), width: responsiveWidth(100) }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: responsiveHeight(8),
                    }}
                >
                    <TouchableOpacity style={styles.button1} onPress={Corn}>
                        <Image
                            style={{
                                height: responsiveHeight(10),
                                width: responsiveWidth(20),
                                alignSelf: "center",
                            }}
                            source={require("../assets/corn.png")}
                        ></Image>
                        <Text style={styles.text}>Corn Medicines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={Rice}>
                        <Image
                            style={{
                                height: responsiveHeight(10),
                                width: responsiveWidth(20),
                                alignSelf: "center",
                            }}
                            source={require("../assets/rice.png")}
                        ></Image>
                        <Text style={styles.text}>Rice Medicines</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity style={styles.button3} onPress={Wheat}>
                        <Image
                            style={{
                                height: responsiveHeight(10),
                                width: responsiveWidth(20),
                                alignSelf: "center",
                            }}
                            source={require("../assets/wheat.png")}
                        ></Image>
                        <Text style={styles.text}>Wheat Medicines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button4} onPress={Potato}>
                        <Image
                            style={{
                                height: responsiveHeight(10),
                                width: responsiveWidth(20),
                                alignSelf: "center",
                            }}
                            source={require("../assets/potato.png")}

                        ></Image>

                        <Text style={styles.text}>Potato Medicines</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(100),
                    borderTopStartRadius: responsiveWidth(10),
                    borderTopRightRadius: responsiveWidth(10),
                    backgroundColor: "yellowgreen",
                    justifyContent: "center",
                }}
            >
            </View>
        </View>
    )
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
        borderTopEndRadius: responsiveWidth(20),
        borderBottomLeftRadius: responsiveWidth(20),
        margin: responsiveWidth(1),
        justifyContent: "center"

    },
    button2: {
        height: responsiveHeight(20),
        width: responsiveWidth(45),
        backgroundColor: "white",
        borderTopLeftRadius: responsiveWidth(20),
        borderBottomRightRadius: responsiveWidth(20),
        margin: responsiveWidth(1),
        justifyContent: "center",

    },
    button3: {
        height: responsiveHeight(20),
        width: responsiveWidth(45),
        backgroundColor: "white",
        borderTopLeftRadius: responsiveWidth(20),
        borderBottomRightRadius: responsiveWidth(20),
        margin: responsiveWidth(1),
        justifyContent: "center",

    },
    button4: {
        height: responsiveHeight(20),
        width: responsiveWidth(45),
        backgroundColor: "white",
        borderTopRightRadius: responsiveWidth(20),
        borderBottomLeftRadius: responsiveWidth(20),
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
        fontSize: responsiveFontSize(5),
        paddingTop: responsiveHeight(3),
        color:'white'
    }
})