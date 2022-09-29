import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {HorizontalView} from './src/components/HorizontalView';
//import {VerticalScroll} from './src/components/VerticalScroll';
import { MyPager } from './src/components/MyPager';

export default function App() {
  return (
    <View style={styles.container}>
      <MyPager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});