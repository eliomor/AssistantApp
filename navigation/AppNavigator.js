import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import LocationScreen from '../screens/LocationScreen';
import AddLocationScreen from '../screens/AddLocationScreen';
import LocationDetailScreen from '../screens/LocationDetailScreen';
import MapScreen from '../screens/MapScreen';

import Colors from '../constants/Colors';

const AppNavigator = createStackNavigator(
    {
     Home : HomeScreen,
     Emergency: EmergencyScreen,
     Location: LocationScreen,
     AddLocation: AddLocationScreen,
     LocationDetail: LocationDetailScreen,
     Map: MapScreen

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