import  React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const VisionScreen = (props) => {

return (
      <View style={styles.container}>
          <Text>Vision Screen</Text>
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

export default VisionScreen;

