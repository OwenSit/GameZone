import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Owen");
  const [person, setPerson] = useState({ name: "mario", age: 30 });

  const handlePress = () => {
    setName("Tony");
  };

  const handleFriendName = () => {
    setPerson({ name: "John", age: person.age });
  };

  const handleYounger = () => {
    setPerson({ name: person.name, age: person.age - 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
        <Text>My name is {name}</Text>
        <Text>
          My friend is {person.name} and he is {person.age} years old
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="change name" onPress={handlePress} />
          <Button title="change friend's name" onPress={handleFriendName} />
          <Button title="make friend younger" onPress={handleYounger} />
        </View>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 30 }}>
          Be the change that you wish to see in the world.
        </Text>
        <Text>Be the change that you wish to see in the world.</Text>
        <Text>Be the change that you wish to see in the world.</Text>
      </View>
      <StatusBar style="dark" />
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
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "blue",
  },
});
