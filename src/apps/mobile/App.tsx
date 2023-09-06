import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera app</Text>
      <Pressable style={styles.button}>
        <Text >Hola</Text>
      </Pressable>
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
  button: {
    marginTop: 30,
    elevation: 8,
    backgroundColor: "#009688",
    padding: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
