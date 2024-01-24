import { StyleSheet, View, Button,Text } from "react-native";
import { Context } from "../App";

export default function TerminalCode1({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Context.Consumer>
        {(val1) => (
          <View>
            <Text>{val1}</Text>
          </View>
        )}
      </Context.Consumer> */}
      <Button
        title="Press me"
        onPress={() => navigation.navigate("Screen 2")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
