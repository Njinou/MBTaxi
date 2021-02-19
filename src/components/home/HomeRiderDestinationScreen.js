
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
                        backgroundColor:'white',
                        alignItems:'center',
                        textAlign:'center',
                        marginBottom:1,
                        borderTopLeftRadius:8,
                        borderTopRightRadius:8,
                        shadowColor: 'red',//rgba(170,170,170,0.5)',//'rgba(170,170,170,0.5)',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 2,
                        shadowRadius:8,
                        elevation:50,
                        flexWrap:'nowrap',alignSelf:'stretch',
                        width:'100%'
                        }} 
                        imageStyle={{marginRight:22}} 
                        image={imageKeys.taxisearch} 
                        placeholder={textKeys.destination}
                        inputStyle={{borderWidth:0,marginRight:24,marginTop :17,
                        }}
                    /> 
                      
                <ScrollView 
                    style={{
                        backgroundColor:'white',
                        borderBottomLeftRadius:8,
                        borderBottomRightRadius:8,
                    }}
                >
                    <TaxiImageText12 
                        image={imageKeys.stayyellow} 
                        text={textKeys.destination} 
                        text1={textKeys.home}
                        text2= "308 Raleigh Dr. Raleigh,NC"
                    />
                    <TaxiImageText12 
                        image={imageKeys.stayyellow} 
                        text={textKeys.destination} 
                    />
                </ScrollView>
                <Image source={imageKeys.yourlocation} style={{marginTop:80,alignSelf:'flex-end',marginRight:60,marginBottom:41}} />
                <Image source={imageKeys.taxi} style={{alignSelf:'flex-end',marginRight:'33%',marginBottom:36}} />
                <Image source={imageKeys.taxi} style={{marginLeft:66,marginBottom:'auto',transform: [{ rotate: "90deg" }]}} />
            </View>
            
            <View style={{ marginTop:'auto',alignItems:'center',justifyContent:'center',flexDirection:'row', alignSelf:'flex-end'}}>
                    <View style={{borderStyle:'solid',borderColor:'#000000',borderWidth:1,flex:1,marginLeft:'30%',margin:5}}/>
                    <Text style={{fontSize:14,fontFamily:fontKeys.MR,color:'#000000'}}>
                        {textKeys.or}
                    </Text>
                    <View style={{borderStyle:'solid',borderColor:'#000000',borderWidth:1,flex:1,marginRight:'30%',margin:5}}/>
            </View>

            <TaxiText 
                style={{
                  //  marginTop:'auto',
                    alignSelf:'stretch',
                    marginLeft:17,
                    marginRight:15,
                    marginBottom:20,
                    borderBottomRightRadius:8,
                    shadowColor: 'rgba(170,170,170,0.5)',
                    shadowOffset:(0,2),
                    shadowOpacity:22,
                    shadowRadius:8,
                    backgroundColor:'white',
                    borderRadius:8
                }} 
                styleText={{
                    color:'#000000',
                    borderWidth:0,
                    fontFamily:fontKeys.MR,
                    padding:13,
                    textAlign:'center',
                    fontSize:14
                }} 

                text={textKeys.rider.request.taxiOption} 
            />

            <View 
                style={{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    paddingLeft:54,
                    paddingRight:46,
                   // marginTop:'auto',
                    backgroundColor:'#222222',
                    shadowOffset:(0,-1),
                    shadowColor:'rgba(0,0,0,0.09)',
                    shadowOpacity:4
                }}

            >   
                <View style={{alignItems:'center',justifyContent:'center',paddingBottom:10,paddingTop:10}}>
                    <Image  source={imageKeys.requesttaxiyellow}/>
                    <Text style={{color:'#F2B84D',fontSize:10,textShadowColor:'#F2B84D',textShadowRadius:1,fontFamily:fontKeys.MSB}}>{textKeys.rider.request.request}</Text>
                </View>
                
                <View style={{alignItems:'center',justifyContent:'center',paddingBottom:10,paddingTop:10}}>
                    <Image  source={imageKeys.scheduledridesgrey} />
                    <Text style={{color:'#C3C1C1',fontSize:10,fontFamily:fontKeys.MSB}}>{textKeys.rider.request.schedule}</Text>
                </View>
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

