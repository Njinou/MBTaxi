import React, { useState,useEffect } from 'react';
import {StyleSheet,View,Image,ImageBackground, ScrollView,Text,TextInput,FlatList, Pressable} from 'react-native';

import fontKeys from  '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';
import TaxiImageText from '../common/TaxiImageText';
import TaxiImageText12 from '../common/TaxiImageText12';
import TaxiImageTextInput from '../common/TaxiImageTextInput';
import RideOtherOptions from '../rider/rideOptions/RideOtherOptions';
import Geolocation from "react-native-geolocation-service"
import Geocoder from 'react-native-geocoding';
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions" //
import { Value } from 'react-native-reanimated';

import auth from '@react-native-firebase/auth';

// passer la valeur retour comme props et la fonction onTexchange
const GOOGLE_MAPS_API_KEY = 'AIzaSyB6iuVD8X4sEeHAGHY3tmMQRyM_Vyoc3UU';

function compareString (str1,str2){
  var words1 = str1.split(/\s+/g),
   words2 = str2.split(/\s+/g),
   i,
   j;
  var total =0;

for (i = 0; i < words1.length; i++) {
   for (j = 0; j < words2.length; j++) {
       if (words1[i].toLowerCase() == words2[j].toLowerCase()) {
       //   console.log('word '+words1[i]+' was found in both strings');
          total++;
       }
   }
}
return total;
}



const DestinationInputComp =() =>{

    const [destination,setDestination] = useState(null);
    const [isSearching,setIsSearching] = useState(false);
    const [value,setValue] = useState(null);
    const [location, setLocation] = useState(null) //
    const [locationAddress, setLocationAddress] = useState(null) //
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState("");
    const [data,setData] = useState([]);
    const [option,setOption] = useState(false);
    const [optionValue,setOptionValue] = useState(null);
    const [currentAddress,setCurrentAddress] = useState("");

    const handleLocationPermission = async () => { 
        let permissionCheck = ""
        if (Platform.OS === "ios") {
          permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    
          if (permissionCheck === RESULTS.DENIED) {
            const permissionRequest = await request(
              PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            )
            permissionRequest === RESULTS.GRANTED
              ? console.warn("Location permission granted.")
              : console.warn("Location perrmission denied.")
          }
        }
    
        if (Platform.OS === "android") {
          permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    
          if (permissionCheck === RESULTS.DENIED) {
            const permissionRequest = await request(
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            )
            permissionRequest === RESULTS.GRANTED
              ? console.warn("Location permission granted.")
              : console.warn("Location perrmission denied.")
          }
        }
      }
     
      useEffect(() => {
        handleLocationPermission()
      }, [])


      useEffect(() => { 
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords
        Geocoder.from({
            latitude: latitude,
            longitude: longitude,
          }).then(res => {
            const {
              formatted_address,
              place_id,
              geometry: {
                location: {lat, lng},
              },
            } = res.results[0];
            setCurrentAddress(formatted_address);
            setLocationAddress(res.results[0]); })
            setLocation({ latitude, longitude })
          },
          error => {
            console.log(error.code, error.message)
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
      }, [])

    APIPlaceAutocomplete = (destination, currentPlace) => {
        const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_MAPS_API_KEY}&input=${destination}&location=${currentPlace.latitude},${currentPlace.longitude}&radius=2000`;
         if (destination.length > 0) {
           return fetch(URL)
             .then(resp => resp.json())
             .then (result => {
               let localAddress = result.predictions.filter( element => compareString(element.description, currentAddress)>1);
               setData(localAddress); 
             })
             .catch(error => console.log('voici l\'erreur ',error));
         } else {
             console.log("No address corresponding ..")
           return 'No destination Address provided';
         }
       };
 
       const onChangeText = (val) =>{
           console.log('value input ',val)
         setTextInput(val);
      APIPlaceAutocomplete(val,location);
       }
       onSubmitEditing = () =>{
         console.log('On submit Editing');
       }


       const renderItem = ({ item }) => (
        <Item item={item} />
      );
      const Item = ({ item}) => (
        <Pressable onPress={() =>  {
          setValue(item);
          setData([]);
          //setTimeout(function(){ props.navigation.navigate('option') }, 1000);
          setOption(true);
          //props.navigation.navigate('riderDestination');
          }}>
          <View style={{backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
            <TaxiImageText12 
                image={imageKeys.stayyellow} 
                text={textKeys.destination} 
                text1={item.place_id}
                text2= {item.description}
            />
          </View>
        </Pressable>
      );



    return (
        <>
        <TextInput  
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
        width:'100%',
        marginTop:20,
        }} 
        imageStyle={{marginRight:22}} 
        image={imageKeys.taxisearch} 
        placeholder={textKeys.destination}
        inputStyle={{borderWidth:0,marginRight:24,marginTop :17,
        }}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={value?  value.description.split(',')[0] : textInput}
    />
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.place_id}
    />
        </>
    );
}
export default DestinationInputComp;
