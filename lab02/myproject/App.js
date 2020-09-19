import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [birthdays, setBirthdays] = useState([]);

  const clickHandler = () => {
    var newAge = age + 1
    setAge(newAge);
    setBirthdays(
      birthdays.concat({key: newAge.toString()})
    );
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder="name" 
        onChangeText={(val) => setName(val)} />
      <Text>{ name } is {age} years old</Text>
      <View style={styles.buttonContainer}>
        <Button title='birthday' onPress={clickHandler} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={birthdays}
          renderItem={({ item }) => (
            <Text>{item.key}</Text>
          )}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal: 20
  }
});
