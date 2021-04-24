import  React from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, Button, Linking, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';

const EmergencyScreen = (props) => {


return (
  <LinearGradient colors={['#C493FF','#FBEAFF']} style={styles.gradient}>
  <ScrollView>
          <View style={styles.topContainer}>
          <View style={styles.container}>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:100');}}>משטרה</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:100');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:101');}}>מד"א</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:101');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:102');}}>כיבוי והצלה</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:102');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:103');}}>חברת חשמל</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:103');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:104');}}>פיקוד העורף</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:104');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:106');}}>מוקד עירוני</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:106');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:119');}}>מוקד הסייבר</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:119');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:1201');}}>עזרה נפשית</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:1201');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>
              <Text style={styles.description}>
                <Text style={styles.title2} onPress={()=>{Linking.openURL('tel:1202');}}>תקיפה מינית</Text>
                <Image
                    onPress={()=>{Linking.openURL('tel:1202');}}
                    style={styles.image}
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                      }}
                    />
              </Text>

          </View>
        </View>
    </ScrollView>
  </LinearGradient>

    );
};


const styles = StyleSheet.create({
  image:{
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height:  20
  },
  topContainer: {
    alignItems: 'center',    
    justifyContent: 'center'
  },
  title2: {
    justifyContent: 'flex-end',
    justifyContent: 'center',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 1,
    marginTop: 10,
    marginLeft: 20,
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    padding: 2,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15

  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default EmergencyScreen;

