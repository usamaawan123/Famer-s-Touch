import { StyleSheet, Text } from "react-native";
import React from "react";
import { FlatList, View } from "react-native-web";
export default function Task() {
  const names = [{ title: "Usama" },{title:"Muneeb"}];
  return <View styles={styles.container}>
    <FlatList data={names} renderItem={(Element)=>{console.log(Element.item.name)}}></FlatList>
    <Text>{Element.item.name}</Text>
  </View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
