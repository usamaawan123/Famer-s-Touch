import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { useState, useRef, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase.config";
export default function SellTab({ navigation }) {
    const inputRef = useRef(null);
    const [Product_name, setProductname] = useState(null)
    const [quantity, setquantity] = useState(null)
    const [price, setprice] = useState(null)
    const [phone, setphone] = useState(null)
    const [address, setaddress] = useState(null)

    const savedata = () => {
        const docRef = addDoc(collection(db, "user"), {
            name: Product_name,
            quantity: quantity,
            price: price,
            phone: phone,
            address: address
        });
        // console.log("your data is " + docRef)
    }
    useEffect(() => {
        inputRef.current.clear();
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
                <Text style={styles.text1}>Sell Products</Text>
            </View>
            <View style={styles.view1}>
                <Image
                    style={{
                        height: responsiveHeight(10),
                        width: responsiveWidth(20),
                        alignSelf: "center",
                    }}
                    source={require("../assets/seller.png")}
                ></Image>
                <Text style={{ fontSize: responsiveFontSize(2) }}>Dear Seller Enter Your Information Below</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    value={Product_name}
                    onChangeText={(Product_name) => setProductname(Product_name)}
                    placeholderTextColor={"black"}
                    keyboardType="default"
                    autoCapitalize="none"
                    ref={inputRef}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Quantity"
                    value={quantity}
                    onChangeText={(quantity) => setquantity(quantity)}
                    placeholderTextColor={"black"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    ref={inputRef}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value={price}
                    onChangeText={(price) => setprice(price)}
                    placeholderTextColor={"black"}
                    autoCapitalize="none"
                    ref={inputRef}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Whatsapp number"
                    value={phone}
                    onChangeText={(phone) => setphone(phone)}
                    placeholderTextColor={"black"}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    ref={inputRef}
                ></TextInput><TextInput
                    style={styles.input}
                    placeholder="address"
                    value={address}
                    onChangeText={(address) => setaddress(address)}
                    placeholderTextColor={"black"}
                    keyboardType="default"
                    autoCapitalize="none"
                    ref={inputRef}
                ></TextInput>

                <TouchableOpacity style={styles.button} onPress={() => { savedata() }}>
                    <Text style={styles.text2}>Sell Products</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        backgroundColor: "#f3fffa",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text2: {
        fontSize: responsiveFontSize(3),
        fontWeight: "bold",
        color: "Sell Products",
        textAlign: "center",
    },
    input: {
        paddingLeft: responsiveWidth(2),
        marginTop: responsiveWidth(3),
        height: responsiveHeight(8),
        width: responsiveWidth(90),
        borderBottomWidth: responsiveWidth(0.5),
        borderLeftWidth: responsiveWidth(0.3),
        borderRadius: responsiveWidth(5),
        borderColor: "#26c485",
        color: "black",
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
    },
    text1: {
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(5),
        color: 'white',
        textAlign: 'center'
    },
    view1: {
        height: responsiveHeight(90),
        width: responsiveWidth(100),
        alignItems: 'center',
        marginTop: responsiveHeight(4)

    }
});