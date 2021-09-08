import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  AppState,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import fontKeys from './src/keyText/fontKeys';
import imageKeys from './src/keyText/imageKeys';

import MenuScreen from './src/components/menu/MenuScreen';
import LoginRoute from './src/routes/LoginRoute';
import HomeRoute from './src/routes/HomeRoute';
import ConfirmationRoute from './src/routes/ConfirmationRoute';


import SetDestinationScreen from './src/components/rider/destination/SetDestinationScreen';
import LoginScreen from './src/components/login/LoginScreen';

import ComponentBackgroundHOC from './src/components/common/ComponentBackgroundHOC';
import MapsScreen from './src/components/maps/MapsScreen'; 
import HomeScreen from './src/components/home/HomeScreen'; //for driver ...
 
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

import AcceptTripModal from './src/components/accepttrip/AcceptTripModal'; // driver .... accepting ride ... 
import DriverStatsScreen from './src/components/driverstats/DriverStatsScreen'; //driver earnings...
import MapDirectionScreen from './src/components/duringtrip/MapDirectionScreen'; // during trip could be rider and driver ...
import SelectTaxiTypeScreen from './src/components/rider/selectTaxi/SelectTaxiTypeScreen'; // orienting drivers where the riders are crowded... 


 
const App: () => React$Node = () => {

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


   // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };

  /**
   * <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{alignItems:'center'}}>
      <ImageBackground source={imageKeys.background} style={styles.image}>
        <LoginRoute/>
        </ImageBackground>
      </SafeAreaView>
   */
  
      if (initializing) return <ActivityIndicator size="large" color="#00ff00" />; 
      if (!user) {
        return (
          <NavigationContainer>
            <LoginRoute/>
          </NavigationContainer>
        );
      }
    
      return (
        
        <NavigationContainer>
          <SelectTaxiTypeScreen/>
        </NavigationContainer>
       
      );
};

const styles = StyleSheet.create({
 arrowDown: {
    borderTopWidth: 66,
    borderRightWidth: 180,
    borderBottomWidth: 0,
    borderLeftWidth: 180,
    borderTopColor: '#F2B84D',
   // backgroundColor:  'transparent',//'#F2B84D',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    marginBottom:21,
    zIndex:0,
   
},
triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
},
driver: {
  textAlign:'center',
  fontSize:20.5,
  fontFamily:fontKeys.MR,
  fontWeight:'bold',
  fontStyle:'italic',
},
driverDot: {
  alignSelf:'flex-start',
  fontSize:15.5,
  fontFamily:fontKeys.MR,
  fontWeight:'bold',
  fontStyle:'italic'
},
password:{
  marginTop:73,
  marginBottom:32
},
passwordText:{
  color:'#A3A1A1',
  fontSize:12,
  fontFamily:fontKeys.MSB
},
image: {
  //flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
  alignSelf:'stretch'
},

});

export default App;
