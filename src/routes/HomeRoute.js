
import * as React from 'react';
import { View, Text } from 'react-native';
import DisplayFareScreen from '../components/rider/fare/DisplayFareScreen';
import DisplayFareSplittedScreen from '../components/rider/fare/DisplayFareSplittedScreen';
import SetDestinationScreen from '../components/rider/destination/SetDestinationScreen';

import MenuScreenRider from '../components/menu/MenuScreenRider';

import RideHistoryComponent from '../components/rider/history/RideHistoryComponent';
import SavedScreen from '../components/rider/saved/SavedScreen';
import PaymentScreen from '../components/rider/payment/PaymentScreen';
import ScheduleScreen from '../components/rider/scheduled/ScheduleScreen';
import HelpScreen from '../components/rider/help/HelpScreen';
import SettingsScreen from '../components/rider/settings/SettingsScreen';
import ContactScreen from '../components/rider/contact/ContactScreen';
import HomeScreen from '../components/rider/home/HomeScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//{props => <HomeScreen {...props} extraData={someData} />} 
const  HomeRoute = ()=> {
  return (
    <Drawer.Navigator initialRouteName="home"  drawerContent={MenuScreenRider}>
    <Drawer.Screen name="home" component={HomeScreen}  options={{ title: 'Request a Ride! ' }}/>
    <Drawer.Screen name="history" component={RideHistoryComponent}  options={{ title: 'history' }}/>
    <Drawer.Screen name="saved" component={SavedScreen}  options={{ title: 'Saved Places' }}/>
    <Drawer.Screen name="payment" component={PaymentScreen}  options={{ title: 'Payment' }}/>

    <Drawer.Screen name="scheduled" component={ScheduleScreen}  options={{ title: 'Scheduled rides' }}/>
    <Drawer.Screen name="help" component={HelpScreen}  options={{ title: 'FAQ & Help' }}/>
    <Drawer.Screen name="settings" component={SettingsScreen}  options={{ title: 'Settings' }}/>
    <Drawer.Screen name="contact" component={ContactScreen}  options={{ title: 'Contact Us' }}/>

  </Drawer.Navigator>
  );
}

export default HomeRoute;