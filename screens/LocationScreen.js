import  React , { useEffect} from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';

import PlaceItem from '../components/PlaceItem';
import Colors from '../constants/Colors';

import * as placesActions from '../store/places-actions';
const LocationScreen = (props) => {
  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
  <LinearGradient colors={['#C493FF','#FBEAFF']} style={styles.gradient}>
    <FlatList
      data={places}
      keyExtractor={item => item.placeId}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate('LocationDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.placeId
            });
          }}
        />
      )}
    />
  </LinearGradient>  
  );
};


LocationScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Locations',
  headerRight: (

<TouchableOpacity style={styles.headerButton}  onPress={()=>{navData.navigation.navigate('AddLocation')}}>
<Text style={styles.headerButtonText}>Add </Text>
</TouchableOpacity>

  ),
 };  
};

 const styles = StyleSheet.create({
    gradient: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerButton: {
      marginHorizontal: 20
    },
    headerButtonText: {
      fontSize: 16,
      color: Colors.primary
    }
  }
);

export default LocationScreen;

