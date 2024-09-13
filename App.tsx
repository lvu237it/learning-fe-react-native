import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('vulv')
  const [test, setTest] = useState({
    name: 'vulv',
    age: 25
  })
  const [count, setCount] = useState<number>(0)

  return (
    <>
    {/* Video 3 4 */}
    <View style={styles.container}>
      {/* trường hợp style với text, nếu style text nằm ở view và bọc text
      thì phần text sẽ không kế thừa được style từ phần view
      Mà chỉ có thể kế thừa từ Text khác

      Ví dụ: //OK
      <Text style={styles.hello1}>
        <Text>
        hello abc
        </Text>
      </Text>
      */}

      {/* NOT OK */}
      <View style={styles.hello1}> 
        <Text>
        hello abc
        </Text>
      </View>

      {/* OK */}
      <Text style={styles.hello1}>
        <Text>
        hello abc
        </Text>
      </Text>

      <Text style={styles.hello1}>Hello World!</Text>
      <Text>ab!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>

    {/* Video 5 */}
    <View style={styles.container}>
      <Text> {JSON.stringify(test)} Hello World video 5!</Text>
      <Text>count = {count}</Text>
      <Button title='Increase' onPress={() => setCount( count + 1)}/>
    </View>
    </>
  );
}

//Không có khái niệm CSS trong React Native
// CSS in JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hello1 : {color: 'red', fontWeight: '600', fontSize: 60, borderColor: 'green', borderWidth: 1}
});
