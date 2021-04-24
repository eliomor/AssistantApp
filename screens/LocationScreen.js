import  React , { useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/UI/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const LocationScreen = (props) => {
  const places = useSelector(state => state.places.places);

  return (
  <LinearGradient colors={['#C493FF','#FBEAFF']} style={styles.gradient}>
    <FlatList
      data={places}
      keyExtractor={item => item.placeId}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
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
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="add"
        iconName={
          Platform.OS === 'android' ? 'md-add' : 'ios-add'
        }
        onPress={()=>{navData.navigation.navigate('AddLocation')}} 
      />
    </HeaderButtons>
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
  }
);

export default LocationScreen;

