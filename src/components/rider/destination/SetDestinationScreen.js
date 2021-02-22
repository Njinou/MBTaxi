import React from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import imageKeys from '../../../keyText/imageKeys';
import TaxiImageText from '../../common/TaxiImageText';
import TaxiTextImage from '../../common/TaxiTextImage';
import textKeys from '../../../keyText/textKeys';
import fontKeys from '../../../keyText/fontKeys';
import TaxiTextInput from '../../common/TaxiTextInput';
import TaxiText12Row from '../../common/TaxiText12Row';
import TaxiText from '../../common/TaxiText';
import TaxiImageText12 from '../../common/TaxiImageText12';
/*
'address': {
            'pickup': 'Pickup',
            'stop': "Add a Stop",
            'destination': "Destination",
            'me': "Me",
            'who': "Who is the rider?",,
            '

        },

*/

const SetDestinationScreen = (props) =>{
    return (
        <View style={{height:'100%',backgroundColor:'white'}}>
            <View 
                style={{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    alignItems:'flex-end',
                    paddingRight:46,
                    paddingLeft:16,
                    paddingBottom:15,
                    paddingTop:15,
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:'rgba(170,170,170,0.5)',//#FFFFFF',
                    shadowColor: 'rgba(170,170,170,0.5)',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 2,
                    shadowRadius: 2,
                    elevation:2,
                }}
            >
                <TaxiImageText image={imageKeys.profilegrey} style={{paddingBottom:-25,alignSelf:'center'}}  text={textKeys.rider.address.forme} />
                <TaxiTextImage  image={imageKeys.dropdown}  style={{alignSelf:'center'}} text= {textKeys.rider.address.change} textStyle={{color:'#5BE39B',fontSize:14,fontFamily:fontKeys.MR,textShadowColor:'rgba(4,80,110,0.5)',textShadowOffset:{width:1,height:1},textShadowRadius:0}} />
            </View>
            <View style={{
                    flexDirection:'row',
                    paddingBottom:23,
                    paddingTop:10,
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:'rgba(170,170,170,0.5)',//#FFFFFF',
                    shadowColor: 'rgba(170,170,170,0.5)',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 2,
                    shadowRadius: 2
            }}>
                <View style={{alignItems:'center',alignSelf:'flex-start',paddingTop:35,paddingLeft:40,paddingRight:25}}>
                    <View style={{backgroundColor:'#67F4A9',width:10,height:10,borderRadius:20}}/>
                    <View  style={{borderLeftColor:'#222222',borderLeftWidth:1,borderLeftStyle:'solid',paddingBottom:75,width:2}}/>
                    <View style={{backgroundColor:'#C3C1C1',width:10,height:10,borderRadius:20}}/>
                    <View  style={{borderLeftColor:'#222222',borderLeftWidth:1,borderLeftStyle:'solid',paddingBottom:75,width:2}}/>
                    <View style={{backgroundColor:'#000000',width:10,height:10,borderRadius:20}}/>
                </View>

                <View 
                    style={{
                        backgroundColor:'#FFFFFF',
                        flex:1,
                    }}
                >
                        <TaxiText text={textKeys.rider.address.pickup}  style={{alignSelf:'flex-start',paddingLeft:40,paddingBottom:10}} styleText={{color:'#878787',fontSize:11,fontFamily:fontKeys.MR}}/>
                        <TaxiTextInput placeholder="12213 wasdqe ad " style={{backgroundColor:'#F2F2F2',alignSelf:'stretch',marginBottom:16}}/>
                        <TaxiText12Row textTopLeft={textKeys.rider.address.stop} textTopRight={textKeys.rider.address.remove}
                            textTopLeftStyle={{
                                color:'#878787',
                                fontSize:11,
                                fontFamily:fontKeys.MR
                            }} 
                            textTopRightStyle={{
                                color:'#5BE39B',
                                fontSize:11,
                                fontFamily:fontKeys.MR
                            }} 
                            style={{borderWidth:0,paddingLeft:40,paddingRight:40,paddingBottom:3}}/>
                        <TaxiTextInput placeholder="Bonamoussadi Douala" style={{backgroundColor:'#F2F2F2',marginBottom:16}}/>
                        <TaxiText text= {textKeys.rider.address.destination}  style={{alignSelf:'flex-start',paddingLeft:40,paddingBottom:3}} styleText={{color:'#878787',fontSize:11,fontFamily:fontKeys.MR}}/>
                        <TaxiTextInput placeholder="Ongola Tongolo" style={{backgroundColor:'#F2F2F2'}}/>
                </View>
            </View>
            <ScrollView style={{flex:1,
                }} >
                 <TaxiImageText12 
                    style={{alignSelf:'stretch',maxWidth:'100%'}}
                    styleText1={{flex:1}}
                    styleText2={{flex:1,alignContent:'stretch'}}
                    textOnlyStyle={{flex:1}}
                    image={imageKeys.stayyellow} 
                    text={textKeys.destination} 
                    text1={textKeys.home}
                    text2= "308 Raleigh Dr. Raleigh,NC 308 Raleigh Dr. Raleigh,NC 308 Raleigh Dr. Raleigh,NC 308 Raleigh Dr. Raleigh,NC"
                    />
                    <TaxiImageText12 
                    style={{alignSelf:'stretch',marginBottom:16}}
                    styleText1={{flex:1}}
                    image={imageKeys.stayyellow} 
                    text={textKeys.destination} 
                    text1={textKeys.home}
                    text2= "308 Raleigh Dr. Raleigh,NC"
                    />
                    <TaxiImageText12 
                    style={{alignSelf:'stretch',marginBottom:16}}
                    styleText1={{flex:1}}
                    image={imageKeys.stayyellow} 
                    text={textKeys.destination} 
                    text1={textKeys.home}
                    text2= "308 Raleigh Dr. Raleigh,NC"
                    />
                    <TaxiImageText12 
                    style={{alignSelf:'stretch',marginBottom:16}}
                    styleText1={{flex:1}}
                    image={imageKeys.stayyellow} 
                    text={textKeys.destination} 
                    text1={textKeys.home}
                    text2= "308 Raleigh Dr. Raleigh,NC"
                    />
                    <TaxiImageText12 
                    style={{alignSelf:'stretch',marginBottom:16}}
                    styleText1={{flex:1}}
                    image={imageKeys.stayyellow} 
                    text={textKeys.destination} 
                    text1={textKeys.home}
                    text2= "308 Raleigh Dr. Raleigh,NC"
                    />
            </ScrollView>
            <TaxiTextImage  image={imageKeys.dropdownblack}  
                style={{alignSelf:'center', borderColor:'#222222',borderStyle:'solid',borderWidth:1,alignSelf:'stretch',justifyContent:'center',paddingTop:5,paddingBottom:8}} 
                text= {textKeys.rider.address.places} 
                textStyle={{color:'#222222',fontSize:14,fontFamily:fontKeys.MR}} 
            />
            
            <ScrollView  style={{flex:1,paddingLeft:37,paddingTop:12}}>
                <TaxiImageText image={imageKeys.history} text=" Marche Mokolo"  textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Essos" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Djombe" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Ngousso" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Etoudi" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Elig Edzoa" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Nkululu" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Dakar" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche !4ieme" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Pa'nshi" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche Faasdas" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche asada" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche asd" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche asd" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>
                <TaxiImageText image={imageKeys.history} text="Marche asd" textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14}}/>

            </ScrollView>
        </View>        
    );
}
export default SetDestinationScreen;