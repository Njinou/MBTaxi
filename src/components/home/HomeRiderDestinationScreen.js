
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {StyleSheet,View,Image,ImageBackground, ScrollView,Text,TextInput} from 'react-native';

import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';
import TaxiImageText from '../common/TaxiImageText';
import TaxiImageText12 from '../common/TaxiImageText12';

import ModalComponent from '../common/ModalComponent';
import TaxiImageTextInput from '../common/TaxiImageTextInput';

const HomeRiderDestinationScreen: (props) => React$Node = (props) => {
    const [destination,setDestination] = useState(null);
    const [isSearching,setIsSearching] = useState(false);
    const [value,setValue] = useState('');

  return (
    <View style={{height:'100%'}}>
        <ImageBackground source={imageKeys.map} style={styles.image}>
            <View style={{marginLeft:20,marginRight:15, }}> 
                <Image  source={imageKeys.menu}  style={{marginBottom:20,marginTop:18}}/>
                
                    <TaxiImageTextInput  
                        style={{
                        backgroundColor:'white',alignItems:'center',textAlign:'center',
                        //paddingTop:17,
                        marginBottom:1,
                        borderTopLeftRadius:8,
                        borderTopRightRadius:8,
                        shadowColor: 'red',//rgba(170,170,170,0.5)',//'rgba(170,170,170,0.5)',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 2,
                        shadowRadius:8,
                        elevation:50
                  
                        }} 
                        imageStyle={{marginRight:22}} 
                        image={imageKeys.taxisearch} 
                        placeholder={textKeys.destination}
                        inputStyle={{borderWidth:0,marginRight:24,
                        }}
                    /> 
                      
                <ScrollView 
                    style={{
                        backgroundColor:'white',
                        borderBottomEndRadius:8,
                        borderBottomStartRadius:8, 
                    }}
                >
                <TaxiImageText12 style={{
                    
                }}  image={imageKeys.stayyellow} 
                        text={textKeys.destination} />
                         <TaxiImageText12 style={{
                    
                }}  image={imageKeys.stayyellow} 
                        text={textKeys.destination} />
                         <TaxiImageText12 style={{
                    
                }}  image={imageKeys.stayyellow} 
                        text={textKeys.destination} />
                         <TaxiImageText12 style={{
                    
                }}  image={imageKeys.stayyellow} 
                        text={textKeys.destination} />
                         <TaxiImageText12 style={{
                    
                }}  image={imageKeys.stayyellow} 
                        text={textKeys.destination} />

            </ScrollView>
            </View>
            

        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
      //  justifyContent: "center",
        alignSelf:'stretch',
        backgroundColor:'white',
      },
});

export default HomeRiderDestinationScreen;

