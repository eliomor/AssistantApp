import  React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LocationDetailScreen = (props) => {

return (
  <LinearGradient colors={['#C493FF','#FBEAFF']} style={styles.gradient}>
      <View style={styles.container}>
          <Text>Location Detail Screen </Text>
      </View>   
  </LinearGradient>  
    );
}

LocationDetailScreen.navigtionOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle') 
   };
};

 const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',    
     justifyContent: 'center'
    },
    gradient: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }
);

export default LocationDetailScreen;

