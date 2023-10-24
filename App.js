// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navBar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from 'react-native-drawer';
// import { useNavigation } from "@react-navigation/native";
import HomeScreen from './components/HomeScreen';
import Reanimated from 'react-native-reanimated';
 import 'react-native-gesture-handler';  


const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator  initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Settings" component={Navbar}/>
    </Drawer.Navigator>
   </NavigationContainer>
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
