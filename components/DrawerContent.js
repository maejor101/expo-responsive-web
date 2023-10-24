import React from 'react';
import { TouchableOpacity } from 'react-native';

function DrawerContent({navigation}) {
  return (
   <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
        <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Settings")} >
        <Text>Settings</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
        <Text>About Us</Text>
    </TouchableOpacity> */}
    
   </View>
  );
}

export default DrawerContent;
