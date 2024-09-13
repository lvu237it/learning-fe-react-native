import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
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
    <View style={styles.container}>
      <Text>abccccc!</Text>
      {/* <StatusBar style="auto" /> */}
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
