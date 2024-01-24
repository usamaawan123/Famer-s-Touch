import { StyleSheet, View } from "react-native";
export default function Ludo() {
return (
<View style={styles.container}>
<View style={styles.wrapper}>
<View style={styles.Box1}>
<View style={styles.box1}>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
</View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox2}></View>
<View style={styles.sbox2}></View>
<View style={styles.sbox2}></View>
<View style={styles.sbox2}></View>
<View style={styles.sbox2}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox2}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.Box2}>
<View style={styles.box2}>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
</View>
</View>
</View>
<View style={styles.wrapper}>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox4}></View>
<View style={styles.sbox4}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox4}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox4}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox4}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox4}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.sqBox}></View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox1}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox1}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox1}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox1}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox1}></View>
<View style={styles.sbox1}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
</View>
</View>
<View style={styles.wrapper}>
<View style={styles.Box3}>
<View style={styles.box3}>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
</View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox3}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox3}></View>
<View style={styles.sbox3}></View>
<View style={styles.sbox3}></View>
<View style={styles.sbox3}></View>
<View style={styles.sbox3}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.wrapper2}>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
<View style={styles.sbox}></View>
</View>
<View style={styles.Box4}>
<View style={styles.box4}>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
<View style={styles.row}>
<View style={styles.circle}></View>
<View style={styles.circle}></View>
</View>
</View>
</View>
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "black",
justifyContent: "center",
},
wrapper: {
flexDirection: "row",
justifyContent: "center",
backgroundColor: "black",
},
wrapper2: {
flexDirection: "column",
justifyContent: "center",
},
Box1: {
backgroundColor: "green",
height: 150,
width: 150,
},
box1: {
backgroundColor: "darkgreen",
height: 100,
width: 100,
margin: 25,
},
Box2: {
backgroundColor: "gold",
height: 150,
width: 150,
},
box2: {
backgroundColor: "goldenrod",
height: 100,
width: 100,
margin: 25,
},
Box3: {
backgroundColor: "red",
height: 150,
width: 150,
},
box3: {
backgroundColor: "maroon",
height: 100,
width: 100,
margin: 25,
},
Box4: {
backgroundColor: "blue",
height: 150,
width: 150,
},
box4: {
backgroundColor: "darkblue",
height: 100,
width: 100,
margin: 25,
},
circle: {
backgroundColor: "white",
height: 20,
width: 20,
borderRadius: 20,
marginLeft: 10,
marginTop: 20,
marginRight: 10,
justifyContent: "center",
},
row: {
justifyContent: "center",
flexDirection: "row",
},
sbox: {
justifyContent: "center",
backgroundColor: "white",
height: 25,
width: 25,
borderWidth:2,
borderColor:"black"
},
sbox3:{
justifyContent: "center",
backgroundColor: "red",
height: 25,
width: 25,
borderWidth:2,
borderColor:"black"
},
sbox2:{
justifyContent: "center",
backgroundColor: "orange",
height: 25,
width: 25,
borderWidth:2,
borderColor:"black"
},
sbox4:{
justifyContent: "center",
backgroundColor: "green",
height: 25,
width: 25,
borderWidth:2,
borderColor:"black"
},
sbox1:{
justifyContent: "center",
backgroundColor: "blue",
height: 25,
width: 25,
borderWidth:2,
borderColor:"black"
},
sqBox:{
width:75,
height:75,
backgroundColor:'black',
borderWidth:15,
borderColor:"dimgrey",
}
});