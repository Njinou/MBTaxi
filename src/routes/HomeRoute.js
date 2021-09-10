
import * as React from 'react';
import { View, Text } from 'react-native';
import DisplayFareScreen from '../components/rider/fare/DisplayFareScreen';
import DisplayFareSplittedScreen from '../components/rider/fare/DisplayFareSplittedScreen';

import MenuScreenRider from '../components/menu/MenuScreenRider';

import RideHistoryComponent from '../components/rider/history/RideHistoryComponent';
import HistoryDetailScreen from '../components/rider/history/HistoryDetailScreen';
import SelectTaxiTypeScreen from '../components/rider/selectTaxi/SelectTaxiTypeScreen';
import MatchDriverScreen from '../components/rider/MatchDriver/MatchDriverScreen';

import SavedScreen from '../components/rider/saved/SavedScreen';
import PaymentScreen from '../components/rider/payment/PaymentScreen';
import ScheduleScreen from '../components/rider/scheduled/ScheduleScreen';
import HelpScreen from '../components/rider/help/HelpScreen';
import SettingsScreen from '../components/rider/settings/SettingsScreen';
import ContactScreen from '../components/rider/contact/ContactScreen';
import HomeScreen from '../components/rider/home/HomeScreen';
import HomeRiderDestinationScreen from '../components/rider/home/HomeRiderDestinationScreen';
import SetDestinationScreen from '../components/rider/destination/SetDestinationScreen';
import ScheduleRideDetails from '../components/rider/scheduled/ScheduledRideDetails';
import HeaderSelectDestination from '../components/common/HeaderSelectDestination';

import RideDetailsScreen from '../components/rider/rideDetails/RideDetailsScreen';


import  RideOtherOptions from '../components/rider/rideOptions/RideOtherOptions';


import textKeys from '../keyText/textKeys';
import imageKeys from '../keyText/imageKeys';

import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react/cjs/react.development';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//{props => <HomeScreen {...props} extraData={someData} />} 
//changer la tof de profil de celui qui prendra le taxi pour la reconnaissance

//par defaut who is the rider ....
const  HomeRoute = (props)=> {
  const [whoRiderText,setWhoRiderText] = React.useState(textKeys.rider.address.forme);
  const [isUserRider,setIsUserRider] = React.useState(true);
  const [selectingUser,setSelectingUser] = React.useState (false); 
  const [user,setUser] = React.useState(auth().currentUser.uid);
  const [openingRating,setOpeningRating] = useState(true);
  const [rating,setRating] = useState(0);
  const [comment,setComment] = useState("");

   changeRider = () => setSelectingUser(!selectingUser);
   whoRiderFunc = (text, user) => { 
      setWhoRiderText(text); 
      setUser(user); 
      setSelectingUser(!selectingUser);
    }
    savingRiderRating = () =>{
      
      if (rating !==0){
        setOpeningRating(!openingRating);
        let obj={};
        obj.comment= comment;
        obj.rating = rating;
        obj.riderId = user;
        console.log("Ffrom Home route ",obj);
  
        //setRating(val);
        //DATABASE SAVING IN DRIVER RATING TAB.....  savin rating 
        //URL users/driverId/riderID/rating/=>push or set key/values
        //should be saved in transaction to avoid ... unconsistency
      }

    }
    settingRating = (val) => setRating(val);
    getComment =(val) => setComment(val);
  return (
    <Drawer.Navigator initialRouteName="destination"  drawerContent={props => <MenuScreenRider {...props}  user={user} />}>
    <Drawer.Screen name="destination">
      {props => <HomeRiderDestinationScreen {...props} 
        openingRatingModal={openingRating} 
        closingRatingModalFunc={savingRiderRating} 
        rate={rating}
        settingRating={settingRating}
        comment={comment}
        getComment={getComment}
      />}
    </Drawer.Screen >
    <Drawer.Screen name="history" component={RideHistoryComponent}  options={{ title: 'history' }}/>
    <Drawer.Screen name="historyDetails" component={HistoryDetailScreen}  options={{ title: 'History Details' }}/>
    <Drawer.Screen name="scheduledRideDetails" component={ScheduleRideDetails}  options={{ title: 'History Details' }}/>
    
    
    <Drawer.Screen name="saved" component={SavedScreen}  options={{ title: 'Saved Places' }}/>
    <Drawer.Screen name="payment" component={PaymentScreen}  options={{ title: 'Payment' }}/>

    
    <Drawer.Screen name="match" component={MatchDriverScreen}  options={{ title: 'Matching your driver' }}/>
    <Drawer.Screen name="select" component={SelectTaxiTypeScreen}  options={{ title: 'Select Ride' }}/>
    <Drawer.Screen name="rideDetails" component={RideDetailsScreen}  options={{ title: 'Ride Details' }}/>
    
    <Drawer.Screen name="scheduled" component={ScheduleScreen}  options={{ title: 'Scheduled rides' }}/>
    <Drawer.Screen name="help" component={HelpScreen}  options={{ title: 'FAQ & Help' }}/>
    <Drawer.Screen name="settings" component={SettingsScreen}  options={{ title: 'Settings' }}/>
    <Drawer.Screen name="contact" component={ContactScreen}  options={{ title: 'Contact Us' }}/>
    
    <Drawer.Screen name="dest2" options={{ 
        title: 'title to be  changed',
      }}>
      {props => <SetDestinationScreen {...props} selectingUser={selectingUser}  func={whoRiderFunc}/>}
    </Drawer.Screen>
    <Drawer.Screen name="option" component={RideOtherOptions}  options={{ title: null }}/>

  </Drawer.Navigator>
  );
}

export default HomeRoute;