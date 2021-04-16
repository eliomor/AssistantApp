import  React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const HearingScreen = (props) => {

return (
      <View style={styles.container}>
          <Text>Hearing Screen</Text>
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

export default HearingScreen;

