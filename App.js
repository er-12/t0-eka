import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Alert, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const buttonPressed = () => {
    Alert.alert('You typed: ' + text);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text>Type something:</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button onPress={buttonPressed} title="Press me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
