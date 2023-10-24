import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image } from 'react-native';

import Drawer from 'react-native-drawer';
import khanlogo from "../assets/khanlogo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const drawerContent = (
    <View style={styles.drawerContainer}>
      <TouchableOpacity style={styles.drawerItem}>
        <Text>Menu Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Text>Menu Item 2</Text>
      </TouchableOpacity>
    
    </View>
  );

  return (
    <View style={styles.container}>
      <Drawer   
        open={isDrawerOpen}
        content={drawerContent}
        onClose={closeDrawer}
        type="static"
        openDrawerOffset={100}
        styles={styles.drawerStyles}
      >
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoContainer}>
          <Image source={khanlogo} style={styles.logoImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openDrawer}>
            <Text>Show Drawer</Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  logoContainer: {
    flex:1,
    alignItems: "center"
  
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  drawerItem: {
    marginBottom: 10,
  },
  drawerStyles: {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
  },
});

export default Navbar;
