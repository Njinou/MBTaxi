import React, { useEffect, useState } from 'react';
import {Text,View,Image,ScrollView, Pressable,Button,FlatList,SafeAreaView} from 'react-native';
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
import database from '@react-native-firebase/database';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const GOOGLE_MAPS_API_KEY = 'AIzaSyB6iuVD8X4sEeHAGHY3tmMQRyM_Vyoc3UU';
//nestedScrollEnabled = {true}
//org.reactjs.native.example.MBTaxi
//com.mbouendeu.MBTaxi
//select rider present Me iff rider is different from Me... otherwise Modal textinput and displays users by username... 
//set prefer friends rider, and most frequent.....

//on peut commencer par who is the rider et puis donner la possibilite a l'utilisateur de faire son choix.. 
// on devra prendre user depuis homeRoute et obtenir a liste des users ..


// LIMIT NUMBER OF ITEM TO A CERTAIN NUMBER AND INCREASING IT BY 5 


const Item = ({ item }) => (
    <TaxiImageText12 
        style={{alignSelf:'stretch',maxWidth:'100%'}}
        styleText1={{flex:1}}
        styleText2={{flex:1,alignContent:'stretch'}}
        textOnlyStyle={{flex:1}}
        image={imageKeys.stayyellow} 
        text={textKeys.destination} 
        text1={item.title? item.title: textKeys.home}
        text2= {item.destination? item.description: item.destination.address_components? item.destination.address_components.formatted_address: "308 Raleigh Dr. Raleigh,NC 308 Raleigh Dr. Raleigh,NC 308 Raleigh Dr. Raleigh,NC 308 Raleigh Dr. Raleigh,NC"}
    />
  );

  const ItemSaved = ({ item }) => {
    return (<TaxiImageText image={imageKeys.history} text={item.destination.description? item.destination.description:JSON.stringify(item)}   style={{ flex: 1 }}  textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:14,flex:1}}/>)
  };

const SetDestinationScreen = (props) =>{
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [Date, setDate] = useState("Select Date");
    const [Time, setTime] = useState("Select Time");
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
    
    const [recentsPlaces,setRecentsPlaces] = useState([]); //afficher les directions recentes
    const [savedPlaces,setSavedPlaces] = useState([]);

    const [recentResults,setRecentsResults]  = useState(5); 
    //setRecentsResults (recentResults + 5 > recentsPlaces.length ? recentsPlaces.length : recentResults + 5 ) 
    const [savedResults,setSavedResults] = useState (5); 
    //setSavedResults (savedResults + 5 > savedPlaces.length ? savedPlaces.length : savedResults + 5 ) 

        //console.log('itemsss itemaaa',props.route.params.item)//.state.params.item)
       // console.log('option',props.route.params.option)//.state.params.option)
       const {
        formatted_address,
        place_id,
        geometry: {
          location: {lat, lng},
        },
      } = location;
    
      const renderItem = ({ item }) => (
        <Item item={item} />
      );

      const renderItemSaved = ({ item }) => (
        <ItemSaved item={item} />
      );
      useEffect (()=>{
        const url = 'users/' + auth().currentUser.uid;
        const reference = database().ref(url);
        reference
                .child ('recents')
                .on('value', snapshot => {
                    if (snapshot.exists()) {
                        // Exist! Do whatever.
                   // console.log('Recents places: ', snapshot.val());
                    setRecentsPlaces(Object.values(snapshot.val()));
                    } else {
                        // Don't exist! Do something.
                        console.log("does not exists has to be")
                    }
                });

        reference
        .child ('saved')
        .on('value', snapshot => {
            if (snapshot.exists()) {
                // Exist! Do whatever.
          //  console.log('Saved data: ', snapshot.val());
            setSavedPlaces(Object.values(snapshot.val()));
            } else {
                // Don't exist! Do something.
                console.log("does not exists has to be")
            }
        });


      },[])
      APIPlaceAutocomplete = (destination, currentPlace) => {
        const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_MAPS_API_KEY}&input=${destination}&location=${currentPlace.latitude},${currentPlace.longitude}&radius=2000`;
         if (destination.length > 0) {
           return fetch(URL)
             .then(resp => resp.json())
             .then (result => {
              // console.log(result.predictions);
             // console.log(result);
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

const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // SE RASSURER QUE LA DATE ET LET TEMPS SONT BIEN CHOISI.... 
    setDate(date.toLocaleDateString('en-US'));
    console.warn("A date has been picked: ", date.toLocaleDateString('en-US'));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
      setTime(time.toLocaleTimeString('en-US'));
      // on peut meme commencer par comparer l'heure.... si l'heure est plus petite que lheure actuel on check la date alors... 
      // parce que l'utilisateur peut commander un taxi pour la meme journee mais a une heure differente
    console.warn("A time  has been selected : ", time.toLocaleTimeString('en-US'));
    hideTimePicker();
  };

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  SchedulingRide = () =>{
    const url = 'users/' + auth().currentUser.uid;
    const reference = database().ref(url);

    let scheduled = {
        id: uuidv4(),
        date:Date,
        time:Time,
        pickup:location,
        destination:destination
    }
    reference.child('scheduled').push(scheduled)
    .then( (res) =>console.log("Ride scheduled !!!!!1",res))
    .catch (error => alert('error is /...',error))
  }
  
    return (
        <ScrollView style={{height:'100%',backgroundColor:'white'}} nestedScrollEnabled={true}>
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
                        textTopRightStyle={{marginRight:40}}
                        petitStyle={{justifyContent:'space-around'}}
                        text2Func={removeStop}
                    /> 

                    <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <View>
                            <Button title={Date} onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleDateConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                        
                        <View>
                            <Button title={Time} onPress={showTimePicker} />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleTimeConfirm}
                                onCancel={hideTimePicker}
                            />
                        </View>

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
            <View style={{flex:1,marginLeft:35
                }} nestedScrollEnabled={true}> 
            <FlatList
                data={recentsPlaces.length>0 ? recentsPlaces.slice(0,recentResults): recentsPlaces}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>

            <Pressable onPress={()=> {if (recentResults <recentsPlaces.length) setRecentsResults (recentResults + 5 > recentsPlaces.length ? recentsPlaces.length : recentResults + 5 ) } }>
                <TaxiTextImage  image={imageKeys.dropdownblack}  
                    style={{alignSelf:'center', borderColor:'#222222',borderStyle:'solid',borderWidth:1,alignSelf:'stretch',justifyContent:'center',paddingTop:5,paddingBottom:8}} 
                    text= {textKeys.rider.address.places} 
                    textStyle={{color:'#222222',fontSize:14,fontFamily:fontKeys.MR}} 
                />
            </Pressable>
            <View>
            
            <ScrollView  style={{flex:1,paddingLeft:37,paddingTop:12,marginRight:37}} nestedScrollEnabled={true}>
            <FlatList
                data={savedPlaces.length>0 ? savedPlaces.slice(0,savedResults): savedPlaces}
                renderItem={renderItemSaved}
                keyExtractor={item => item.id}
            />
            </ScrollView>
            </View>
            <TaxiButton  text="Schedule Ride" style={{marginBottom:'auto'}} func={SchedulingRide}/>
        </ScrollView>        
    );
}
export default SetDestinationScreen;