import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import HearingScreen from '../screens/HearingScreen';
import VisionScreen from '../screens/VisionScreen';
import LocationScreen from '../screens/LocationScreen';

import Colors from '../constants/Colors';

const AppNavigator = createStackNavigator(
    {
     Home : HomeScreen,
     Emergency: EmergencyScreen,
     Hearing: HearingScreen,
     Vision: VisionScreen,
     Location: LocationScreen

    },
    {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.white : ''
        },
            headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.primary
    }
});

export default createAppContainer(AppNavigator);