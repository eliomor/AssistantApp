import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const AddLocationScreen = (props) => {
  const dispatch = useDispatch()
  const [titleValue, setTitleValue] =useState('')
  const [selectedImage, setSelectedImage] =useState('')
  const [selectedLocation, setSelectedLocation] = useState();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage,selectedLocation));
    props.navigation.goBack(); 
  };
  
  const imageTakenHandler = ImagePath => {
      setSelectedImage(ImagePath);
  };

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

return (
  <LinearGradient colors={['#C493FF','#FBEAFF']} style={styles.gradient}>
    <ScrollView>
      <View style={styles.form}>
          <Text style={styles.label}>הזן שם מקום:</Text>
          <TextInput 
              style={styles.textInput} 
              onChangeText={titleChangeHandler} 
              value={titleValue}
          />
          <ImagePicker onImageTaken={imageTakenHandler} />
          <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler}
          />
          <View style={styles.button}>
          <Button title="שמור מקום" color={Colors.primary} onPress={savePlaceHandler} />
          </View>
      </View> 
   </ScrollView>
  </LinearGradient>       
    );
}

AddLocationScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Add Place',
 };  
};

 const styles = StyleSheet.create({
    form: {
    margin:30,
    },
    label: {
      fontSize: 20,
      marginBottom: 15,
      justifyContent: 'center',
      marginRight: 30
     },
    textInput: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginBottom: 30,
      paddingVertical: 4,
      paddingHorizontal: 2
    },
    gradient: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      marginTop:10,
      width:'72%',
      marginLeft: 50
    }
  }
);

export default AddLocationScreen;

