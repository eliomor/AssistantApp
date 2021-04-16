import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const UserItem = props => {
  return (
    <TouchableOpacity onPress={props.onClickMenuItem}>
     <View style={styles.containerTop1}> 
      <View style={styles.containerTop}> 
       <View style={styles.container}>
          <Image
              style={styles.image}
              source={{
                uri: props.image,
        }}
      />
        </View>
       </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height:  60
  },
  containerTop1: {
    marginTop: 15,

  },
  containerTop: {
    marginTop: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },

  container: {
    flexDirection: 'row',
    width:150,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 70,
    backgroundColor:  Colors.primary ,
    height: 80,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  name: {
    justifyContent: 'center',
    alignItems: 'center',
    color:'white',
    fontSize: 30,
    marginVertical: 6
  },

});

export default UserItem;
