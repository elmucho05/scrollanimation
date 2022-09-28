import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {HorizontalView} from './src/components/HorizontalView';
import {VerticalScroll} from './src/components/VerticalScroll';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VerticalScroll />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});