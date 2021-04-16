import  React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const LocationScreen = (props) => {

return (
      <View style={styles.container}>
          <Text>Locaation Screen</Text>
      </View>     
    );
}

 const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',    
     justifyContent: 'center'
    }
  }
);

export default LocationScreen;

