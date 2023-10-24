import React from 'react';
import { View,Text , TouchableOpacity } from 'react-native';

function HomeScreen({navigation}) {
  return (
   <View>
    <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
    <Text>☰ </Text>
    </TouchableOpacity>


   </View>
  );
}

export default HomeScreen;
