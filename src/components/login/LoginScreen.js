/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';

import fontKeys from '../../keyText/fontKeys';
import TaxiText from '../common/TaxiText'
import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'

const LoginScreen: () => React$Node = () => {
  return (
    <>
        <View style={{width:360,height:242,backgroundColor:'#F2B84D'}}>
            <View style={{alignItems:'center',marginTop:124}}>
              <Text style={{textAlign:'center',fontSize:63.5,fontFamily:fontKeys.MR,fontWeight:'bold'}}>
                TAXI
              </Text>
              
              <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>  
                <Text style={styles.driverDot }> . </Text>
                <Text style={styles.driver}>
                  DRIVER
                </Text>
                <Text style={styles.driverDot}> . </Text>
              </View>
            </View>
        </View>
        <View style={[styles.triangle,styles.arrowDown]}/>
        <TaxiTextInput secureTextEntry={true}/>
        <TaxiTextInput keyboardType="numeric"/>
        <TaxiButton/>
        <TaxiText   
          text="FORGOT PASSWORD" 
          style={styles.password} 
          styleText={styles.passwordText}
        />
        <TaxiText/>
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

export default LoginScreen;
