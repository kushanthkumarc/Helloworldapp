import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [message, setMessage] = useState('Hello, World!');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Click Me" onPress={() => setMessage('Button Clicked!')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default App;
