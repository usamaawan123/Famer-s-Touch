import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const My_Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const registrationNumber = "SP20-BSE-10";

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data.filter((todo) => todo.userId === 3).slice(0, 5)); // slice to display a maximum of 5 todos
      setLoading(false);
    };
    fetchTodos();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          borderWidth: 3,
          textAlign: "center",
          margin: 10,
        }}
      >
        My Todo List
      </Text>
      <FlatList
        style={{ borderWidth: 2 }}
        data={todos}
        renderItem={({ item }) => (
          <View
            style={[
              styles.todo,
              item.completed ? styles.completed : styles.incomplete,
            ]}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                margin: 2,
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    justifyContent: "center",
  },
  todo: {
    padding: 16,
  },
  completed: {
    backgroundColor: "green",
    borderWidth: 2,
    margin: 8,
  },
  incomplete: {
    backgroundColor: "red",
    borderWidth: 2,
    margin: 8,
  },
});

export default My_Todos;
