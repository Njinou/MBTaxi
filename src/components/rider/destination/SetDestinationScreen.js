import React, { useState } from 'react';
import {Text,View,Image,ScrollView, Pressable} from 'react-native';
import imageKeys from '../../../keyText/imageKeys';
import TaxiImageText from '../../common/TaxiImageText';
import TaxiTextImage from '../../common/TaxiTextImage';
import textKeys from '../../../keyText/textKeys';
import fontKeys from '../../../keyText/fontKeys';
import TaxiTextInput from '../../common/TaxiTextInput';
import TaxiText12Row from '../../common/TaxiText12Row';
import TaxiText from '../../common/TaxiText';
import TaxiImageText12 from '../../common/TaxiImageText12';
import HeaderSelectDestination from '../../common/HeaderSelectDestination';
import TaxiButton from '../../common/TaxiButton';

import auth from '@react-native-firebase/auth';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB6iuVD8X4sEeHAGHY3tmMQRyM_Vyoc3UU';

//org.reactjs.native.example.MBTaxi
//com.mbouendeu.MBTaxi
//select rider present Me iff rider is different from Me... otherwise Modal textinput and displays users by username... 
//set prefer friends rider, and most frequent.....

//on peut commencer par who is the rider et puis donner la possibilite a l'utilisateur de faire son choix.. 
// on devra prendre user depuis homeRoute et obtenir a liste des users ..
const SetDestinationScreen = (props) =>{
        const [addStop,SetStop] = useState(false);
        const [meRider,setMeRider] = useState(textKeys.rider.address.whor); //textKeys.rider.address.forme
        const [scheduledRide,scheduleARide] = useState ('schedule' === props.route.params.option);
        const [allUsers,setAllUsers] = useState ([]); // la liste de tous les utilisateurs .... 
        const [meUser,setMeUser] = useState (auth().currentUser);
        const [destination, setDestination] = useState(props.route.params.destination);
        const [location, setLocation] = useState(props.route.params.location);
        const [longLat, setLongLat] = useState(props.route.params.currentPosition);

        const [addressStop, setAddressStop] = useState(null);

        const AjouterStop = () => {SetStop(true);}
        const removeStop = () => SetStop(false);
        const addRiders = () => setMeRider(textKeys.rider.address.whor);
        
        //console.log('itemsss itemaaa',props.route.params.item)//.state.params.item)
       // console.log('option',props.route.params.option)//.state.params.option)
       const {
        formatted_address,
        place_id,
        geometry: {
          location: {lat, lng},
        },
      } = location;

      APIPlaceAutocomplete = (destination, currentPlace) => {
        const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_MAPS_API_KEY}&input=${destination}&location=${currentPlace.latitude},${currentPlace.longitude}&radius=2000`;
         if (destination.length > 0) {
           return fetch(URL)
             .then(resp => resp.json())
             .then (result => {
              // console.log(result.predictions);
              console.log(result);
               let localAddress = result.predictions.filter( element => compareString(element.description, formatted_address)>1);
               setData(localAddress); //(result.predictions);
             // setData (result.predictions);
             }) // compareString 
             //result.predictions.filter( element => compareString(element, currentAddress)) 
             ////ici il faut filtrer les valeurs avec la ville et le pays pour diminuer les valeurs envoyer ....  
           // et pour cela on peut prendre les valeur de geocoder comme reference ......   et il faut verifier que le format est le meme cest a dire le nombre de virgule qui separe les villes et les pays est le meme que les resultats qui sont 
           //produits
             .catch(error => console.log('voici l\'erreur ',error));
         } else {
             console.log("No address corresponding ..")
           return 'No destination Address provided';
         }
       };
//APIPlaceAutocomplete(input, latlong)

    return (
        <ScrollView style={{height:'100%',backgroundColor:'white'}}>
           { props.selectingUser? <View style={{paddingTop:9,}}>  
                <TaxiImageText 
                    image={imageKeys.profilegrey} 
                    style={{ borderStyle:'solid',
                            borderBottomWidth:1,
                            borderBottomColor:'rgba(170,170,170,0.5)',
                            alignItems:'center',
                            padding:0,
                            marginTop:23,
                            paddingLeft:100,
                    }}  
                    textStyle={{color:'#000000',fontSize:14,fontFamily:fontKeys.MR}} 
                    text= {textKeys.rider.address.me}
                    func={()=>props.func("Me and me",meUser )}
                />
                <TaxiImageText 
                    image={imageKeys.plusgreen} 
                    style={{borderStyle:'solid',
                            borderBottomColor:'rgba(170,170,170,0.5)',
                            borderBottomWidth:1,
                            alignItems:'center',
                            marginTop:23,
                            paddingLeft:100,
                    }} 
                    text={textKeys.rider.address.who} 
                    textStyle={{color:'#5BE39B',fontSize:14,fontFamily:fontKeys.MR}}
                    func={()=>props.func("you and you ", {photoURL:'https://reactnative.dev/img/tiny_logo.png',displayName:'test once', uid:123314242432})}
                />

            </View> :null}
            {scheduledRide ?
                <View style={{borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#F2F2F2'}}>
                    <TaxiText12Row textTopLeft={'Date'} textTopRight={'Time'}
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
                        style={{borderWidth:0,paddingBottom:3,paddingLeft:40}}
                        textTopLeftStyle={{marginRight:150}}
                        textTopRightStyle={{marginRight:20}}
                        petitStyle={{justifyContent:'space-around'}}
                        text2Func={removeStop}
                    /> 
                    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',}}>
                        <TaxiTextInput placeholder="Assdsadasd" />
                        <TaxiTextInput placeholder="Assdsadasd"/>
                    </View>

                 
            </View> : null
            }

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
                    shadowRadius: 2,
                    elevation:2
            }}>
                <View style={{alignItems:'center',alignSelf:'flex-start',paddingTop:35,paddingLeft:40,paddingRight:25}}>
                    <View style={{backgroundColor:'#67F4A9',width:10,height:10,borderRadius:20}}/>
                    <View  style={{borderLeftColor:'#222222',borderLeftWidth:1,borderLeftStyle:'solid',paddingBottom:75,width:2}}/>
                    <View style={{backgroundColor:addStop? '#C3C1C1' : '#222222',width:10,height:10,borderRadius:20}}/>

                    {addStop? 
                    <>
                        <View  style={{borderLeftColor:'#222222',borderLeftWidth:1,borderLeftStyle:'solid',paddingBottom:75,width:2}}/>
                        <View style={{backgroundColor:'#000000',width:10,height:10,borderRadius:20}}/>
                    </>: null}
                </View>

                <View 
                    style={{
                        backgroundColor:'#FFFFFF',
                        flex:1,
                    }}
                >
                        <TaxiText text={textKeys.rider.address.pickup}  style={{alignSelf:'flex-start',paddingLeft:40,paddingBottom:10}} styleText={{color:'#878787',fontSize:11,fontFamily:fontKeys.MR}}/>
                        <TaxiTextInput placeholder={formatted_address} value={formatted_address} style={{backgroundColor:'#F2F2F2',alignSelf:'stretch',marginBottom:16}}/>
                        
                        {addStop?  
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
                             style={{borderWidth:0,paddingLeft:40,paddingRight:40,paddingBottom:3}}
                             text2Func={removeStop}
                         /> :null
                        }
                        
                        {addStop?<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <TaxiTextInput placeholder="Bonamoussadi Douala" style={{backgroundColor:'#F2F2F2',marginBottom:16,flex:1,paddingRight:0, marginRight:0}}/>
                            <View  style={{marginLeft:18,marginRight:18,justifyContent:'center',alignSelf:'center',paddingBottom:15}}>
                               
                            </View>
                            
                        </View> : null}
                         
                        <TaxiText text= {textKeys.rider.address.destination}  style={{alignSelf:'flex-start',paddingLeft:40,paddingBottom:3}} styleText={{color:'#878787',fontSize:11,fontFamily:fontKeys.MR}}/>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <TaxiTextInput placeholder="Bonamoussadi bonakanwa" value={destination.description} style={{backgroundColor:'#F2F2F2',marginBottom:16,flex:1,paddingRight:0, marginRight:0}}/>
                           <View  style={{marginLeft:18,marginRight:18,justifyContent:'center',alignSelf:'center',paddingBottom:15}}>
                           {!addStop?  <Pressable onPress={AjouterStop}>
                                    <Image source={imageKeys.plus} />
                                </Pressable>:null}
                            </View>
                            
                        </View> 

                        
                </View>
            </View>
            <ScrollView style={{flex:1,paddingLeft:35
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
            <View>
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
            <TaxiButton  text="Continue" style={{marginBottom:27}}/>
        </ScrollView>        
    );
}
export default SetDestinationScreen;