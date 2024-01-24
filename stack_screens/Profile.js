import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Medicines({ navigation }) {
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    // useEffect(() => {
    //     const beforeRemoveListener = navigation.addListener('beforeRemove', (e) => {
    //         // Prevent the screen from being removed
    //         e.preventDefault();
    //     });

    //     // Clean up the listener when the component is unmounted
    //     return () => beforeRemoveListener();
    // }, [navigation]);
    useEffect(() => {
        AsyncStorage.getItem("user").then((val1) => { setUsername(val1) });
        AsyncStorage.getItem("email").then((val2) => { setemail(val2) });
    })
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
                <Text style={styles.text1}>Profile</Text>
            </View>
            <View style={{ height: responsiveHeight(60), width: responsiveWidth(100) }}>
                <Image
                    style={styles.image}
                    source={require("../assets/hacker.png")}
                ></Image>
                <Text style={styles.text}>{username}</Text>
                <Text style={styles.text}>{email}</Text>
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
        backgroundColor: "yellow",
        margin: responsiveWidth(1),
        justifyContent: "center"
    },
    text: {
        fontSize: responsiveFontSize(3),
        color: "black",
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:responsiveHeight(1)
    },
    text1: {
        textAlign: 'center',
        fontSize: responsiveFontSize(5),
        paddingTop: responsiveHeight(4),
        paddingLeft: responsiveHeight(13),
        color: 'white'
    },
    image: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(30),
        height: responsiveHeight(15),
        alignSelf:'center'
    },
    text2: {
        fontSize: responsiveFontSize(3),
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        paddingLeft: responsiveWidth(10),
    },
    button: {
        margin: responsiveHeight(3),
        height: responsiveHeight(5),
        width: responsiveWidth(60),
        borderBottomRightRadius: responsiveWidth(90),
        borderRightColor: "#26c485",
        borderRightWidth: responsiveWidth(5),
        borderBottomWidth: responsiveWidth(.5),
        borderBottomColor: "#26c485",
        backgroundColor: "white",
    }


})