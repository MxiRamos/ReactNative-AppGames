import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons'
import BottomNavigator from './navigation/BottomNavigator';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      
      
      <NavigationContainer theme={DarkTheme}>
        <BottomNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App