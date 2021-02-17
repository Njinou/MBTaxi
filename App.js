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
  View,
  Text,
  AppState,
  ImageBackground,
  Image
} from 'react-native';
import TaxiTextInput from './src/components/common/TaxiTextInput';
import TaxiButton from './src/components/common/TaxiButton';
import fontKeys from './src/keyText/fontKeys';
import TaxiText from './src/components/common/TaxiText';
import LoginScreen from './src/components/login/LoginScreen';
import SignUp from './src/components/signUp/SignUp';
import SignUpConfirmationCode  from './src/components/signUp/SignUpConfirmationCode';
import imageKeys from './src/keyText/imageKeys';
import ConfirmationSuccess from  './src/components/signUp/ConfirmationSuccess';
import MenuScreen from  './src/components/menu/MenuScreen';
import AcceptTripModal from './src/components/accepttrip/AcceptTripModal';
import MapDirectionScreen from './src/components/duringtrip/MapDirectionScreen';
import HomeScreen from './src/components/home/HomeScreen';
import HomeOfflineScreen from './src/components/home/HomeOfflineScreen';
import RatingScreen from './src/components/rate/RatingScreen';
import DriverOpportunityScreen from './src/components/ridenotification/DriverOpportunityScreen';

const App: () => React$Node = () => {

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

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
//text == blanc  
//text blanc
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{alignItems:'center'}}>
      <ImageBackground source={imageKeys.background} style={styles.image}>
        <DriverOpportunityScreen/>
        </ImageBackground>
      </SafeAreaView>
    </>
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
