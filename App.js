import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Main from './src/Main';
export default function App() {
  return <Main/>;
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text style={styles.styleText}>WELCOME TO POKEMON AXIOS API APP</Text>
  //     <StatusBar style="auto" />
      
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  styleText:{
    fontWeight:'bold',
    marginBottom:700
  }
});
