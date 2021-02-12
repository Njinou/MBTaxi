/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState,useEffect,useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  useWindowDimensions,
  Dimensions,
} from 'react-native';

import fontKeys from '../../keyText/fontKeys';
import textKeys from '../../keyText/textKeys';

import TaxiText from '../common/TaxiText'
import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'

const LoginScreen: () => React$Node = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [isportrait,setIsPortrait] = useState(windowWidth <= windowHeight);

  const appState = useRef(Dimensions.get('screen'));

  useEffect(() => {
    Dimensions.addEventListener("change", function(ecran) {
       setIsPortrait(ecran.screen.width <=  ecran.screen.height);
     });
  }, []);

  return (
    <>    
         <Text style={{color:'red',fontSize:22,marginBottom:10,fontFamily:fontKeys.MEBI,color:'#F2B84D',marginTop:10,
          textShadowColor: 'rgba(4,80,110,0.5)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 5
        }}> {textKeys.taxiDriver} </Text>
        { (isportrait && windowHeight >= 600)?
        <>
        <View style={{width:360,height:242,backgroundColor:'#F2B84D'}}>
            <View style={{alignItems:'center',marginTop:124}}>
              <Text style={{textAlign:'center',fontSize:63.5,fontFamily:fontKeys.MR,fontWeight:'bold'}}>
                {textKeys.taxi}
              </Text>
              
              <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>  
                <Text style={styles.driverDot }> . </Text>
                <Text style={styles.driver}>
                  {textKeys.driver}
                </Text>
                <Text style={styles.driverDot}> . </Text>
              </View>
            </View>
        </View>
        <View style={[styles.triangle,styles.arrowDown]}/> 
        </>
        :null}
        
        <TaxiTextInput placeholder={textKeys.login.username}/>
        <TaxiTextInput  placeholder={textKeys.password} secureTextEntry={true}/>
        <TaxiButton  text={textKeys.login.login}/>
        <TaxiText   
          text={textKeys.login.forgotPassword}
          style={styles.password} 
          styleText={styles.passwordText}
        />
        <TaxiText text={textKeys.login.createAccount}/>
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
