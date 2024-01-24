import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const MyFavourites = ({ navigation }) => {
  const Clickme = () => {
    navigation.navigate("usama");
  };
  const [fetchdata, setFetch_data] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setFetch_data(data.filter((fetchData) => fetchData.userId === 1));
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setComments(data.filter((comments) => comments.postId === 1).slice(0, 3));
      setLoading(false);
    };
    fetchComments();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 10 }}>
        If Screen title is null Click Below
      </Text>
      <TouchableOpacity onPress={Clickme} style={styles.button}>
        <Text style={styles.text}>Add Username</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          borderWidth: 2,
          margin: 10,
        }}
      >
        MY Favourites List
      </Text>
      <FlatList
        style={styles.flatlist1}
        data={fetchdata}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                borderColor: "black",
                textAlign: "center",
              }}
            >
              {item.title.slice(0, 15)}
            </Text>
            <Text style={{ fontSize: 13,padding:10 }}>{item.body.slice(0, 200)}</Text>
            <FlatList
              data={comments}
              renderItem={({ item }) => (
                <View style={styles.todo}>
                  <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Comments</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      borderColor: "black",
                      paddingLeft:5
                    }}
                  >
                    {item.email}
                  </Text>
                  <Text style={{padding:8,fontSize:13}}>{item.body.slice(0, 15)}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
  },
  todo: {
    borderWidth: 2,
  },
  input: {
    margin: 10,
    paddingLeft: 10,
    alignSelf: "center",
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "black",
    color: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    height: 40,
    width: 200,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    alignSelf: "center",
    marginTop: 10,
  },
  flatlist1: {
    borderWidth: 2,
    borderColor: "black",
    height: "50%",
  },
});

export default MyFavourites;
