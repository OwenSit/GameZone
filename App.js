import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

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

  const handleInputNameChange = (val) => {
    setName(val);
  };

  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  const pressHandler = (id) => {
    // console.log(`"${people[0].name}" is deleted`);
    setPeople((oriPeople) => {
      return oriPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20 }}>Enter Name 1:</Text>
      <TextInput
        multiline
        keyboardAppearance="dark"
        keyboardType="ascii-capable"
        style={styles.input}
        placeholder="e.g. Alex"
        onChangeText={handleInputNameChange}
      />
      <Text>Enter Name 2: </Text>
      <TextInput
        multiline
        keyboardAppearance="light"
        keyboardType="ascii-capable"
        style={styles.input}
        placeholder="e.g. Owen"
        onChangeText={(val) => {
          setPerson({ name: val, age: person.age });
        }}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardAppearance="light"
        keyboardType="number-pad"
        style={styles.input}
        placeholder="e.g. 24"
        onChangeText={(val) => {
          setPerson({ name: person.name, age: val });
        }}
      />
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
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
