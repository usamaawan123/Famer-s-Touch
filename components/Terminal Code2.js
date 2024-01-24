import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Context } from "../App";
export default function TerminalCode2() {
  return (
    <View style={styles.container}>
      <Context.Consumer>
        {({name,age}) => (
          <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
          </View>
        )}
      </Context.Consumer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
