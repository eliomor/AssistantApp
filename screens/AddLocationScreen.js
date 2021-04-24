import  React , { useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';

const AddLocationScreen = (props) => {
  const dispatch = useDispatch()
  const [titleValue, setTitleValue] =useState('')
  const [selectedImage, setSelectedImage] =useState('')

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage));
    props.navigation.goBack(); 
  };
  
  const imageTakenHandler = ImagePath => {
      setSelectedImage(ImagePath);
  };

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
      marginRight: 15
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
      marginLeft: 18
    }
  }
);

export default AddLocationScreen;

