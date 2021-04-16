import React from "react";
import { View, Text, Button, ScrollView ,StyleSheet, ColorPropType} from 'react-native';
import { FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MenuItem from '../components/MenuItem'; 
import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';


const MenuScreen = (props) => {
  const menu = [
    {name : "Hearing",image :"https://cdn.iconscout.com/icon/premium/png-512-thumb/ear-74-582302.png"},
    {name :"Vision",image :"http://simpleicon.com/wp-content/uploads/eye2.png"},
    {name :"Location",image :"https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"},
    {name :"Emergency",image :"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"},

   ];
  return (
    <ScrollView>
    <View >
      <Text style={styles.text}>
       Welcome To 
      </Text>
      <Text style={styles.text}>
       Assistant App
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
    fontSize: 30,
    textAlign: "center",
    alignItems: 'center',
  }
});

export default MenuScreen;
