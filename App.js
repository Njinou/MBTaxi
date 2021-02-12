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
  Image
} from 'react-native';
import TaxiTextInput from './src/components/common/TaxiTextInput';
import TaxiButton from './src/components/common/TaxiButton';
import fontKeys from './src/keyText/fontKeys';
import TaxiText from './src/components/common/TaxiText';
import LoginScreen from './src/components/login/LoginScreen';

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

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{alignItems:'center'}}>
        <LoginScreen/>
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
}

});

export default App;
