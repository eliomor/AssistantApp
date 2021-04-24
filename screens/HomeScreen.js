import React from "react";
import { View, Text, ScrollView ,StyleSheet, LogBox  } from 'react-native';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MenuItem from '../components/MenuItem'; 
import Colors from '../constants/Colors';

LogBox.ignoreAllLogs();


const MenuScreen = (props) => {
  const menu = [
    {name :"Location",image :"https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"},
    {name :"Emergency",image :"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"},

   ];
  return (
  <LinearGradient colors={['#C493FF','#FBEAFF']} style={styles.gradient}>
    <ScrollView>
    <View >
      <Text style={styles.text}>
      הגעתם 
      </Text>
      <Text style={styles.text}>
      לאסיסטק!
      </Text>
    </View>
    <FlatList
      data={menu}
      renderItem={itemData => (
        <MenuItem        
          name={itemData.item.name}
          image={itemData.item.image}
          onClickMenuItem={() => {
          props.navigation.navigate(itemData.item.name);
          }}
        />       
      )}
    />
    </ScrollView>
  </LinearGradient>
  );
};


MenuScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Menu'
  };
};


const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    color: Colors.primary,
    fontSize: 35,
    textAlign: "center",
    alignItems: 'center',
    
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MenuScreen;
