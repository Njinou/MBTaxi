import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView,Image, SafeAreaView, FlatList} from "react-native";

import fontKeys from '../../../keyText/fontKeys';
import textKeys from '../../../keyText/textKeys';
import TaxiTextInput from '../../common/TaxiTextInput';
import TaxiText from  '../../common/TaxiText';
import TaxiImageText from '../../common/TaxiImageText';
import TaxiText12Row from '../../common/TaxiText12Row';
import TaxiImageTextInput from '../../common/TaxiImageTextInput';
import TaxiButton from '../../common/TaxiButton';
import MatchDriverScreen from '../MatchDriver/MatchDriverScreen';
import RideDetailsScreen from '../rideDetails/RideDetailsScreen';

import Rate from '../../rate/Rate';
import imageKeys from "../../../keyText/imageKeys";

import RideHistoryBlock from '../history/RideHistoryBlock';

import {Picker} from '@react-native-picker/picker';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    matricule: 'matricule ',
    driverID: 'driverId ',
    nbrePlaces: 5,
    pu: '250',
    taxiType:'Taxi',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    matricule: 'matricule ',
    driverID: 'driverId ',
    nbrePlaces: 2,
    pu: '300',
    taxiType:'Moto-Taxi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    matricule: 'matricule ',
    driverID: 'driverId ',
    nbrePlaces: 20,
    pu: '250',
    taxiType:'Clando-Bus',
  },
];

const PriceMoto =(props)=> {
  return (
    <View style={[{flex:1,justifyContent:'space-between',flexDirection:'row',paddingTop:29},props.style]}>
      <View style={{flex:1,flexDirection:'column'}}>
        {props.componentTopLeft? props.componentTopLeft: <Text style={[{color:'#000000',fontSize:16,fontFamily:fontKeys.MR,},props.styleBottomLeft]}> {props.textTopLeft} </Text>}
        {props.componentBottomLeft? props.componentbottomLeft:<Text style={[{paddingBottom:22,color:'#878787',fontSize:12,fontFamily:fontKeys.MR},props.styleBottomLeft]}> {props.textBottomLeft} </Text>}
      </View>
      <View >
      {props.componentTopRight? props.componentTopRight: <Text style={[{paddingRight:21,color:'#3F4D5F',fontSize:18,fontFamily:fontKeys.MR},props.styleTopRight]}> {props.textTopRight} </Text>}
      
      </View>
  </View>)
}

const PriceViewRight = () =>{
  return (
    <View style={{flex:1,alignSelf:'center',alignItems:'flex-start',justifyContent:'center'}}>
        <Text style={{color:'red',fontSize:20,textAlign:'center'}}>
        ready!!! ready!!!!
      </Text>
    </View>
    
  );
}

const MotoPicket = () =>{
  return (
    null
  );
}
//chaque taxi a son prix unitaire  item.pu

//item.matricule
//item.driverID
//item.nbrePlaces
//item.pu
//item.taxiType

// check if nbrePeople > nbrePlaces
// anticiper et mettre le nombre de people disponible  = nmbre place au max... 
const SelectTaxiTypeScreen = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isSearching,setIsSearching] = useState(false); 
    const [input,setInput] = useState(null); 
    const [selectedPeople, setSelectedPeople] = useState(1);
    const [selectedTaxi,setSelectedTaxi] = useState(DATA[0]); //data[0]
    const [prixUnitaire,setPrixUnitaire]  = useState(250);
    const [prixTotal,setPrixTotal]  = useState(prixUnitaire);
    const [bid,setBidding]  = useState(false);
    const [matchingDriver,setMatchingDriver] = useState(false);
    const [driverMatched,setDriverMatched] = useState(false);
   const  bidding = (val) =>  {setPrixTotal(val); setBidding(true)}
   

   //setDriverMatched (true) once driver is found
  /* useEffect ( ()=>{
    //FETCHING DATA FROM FIREBASE...
    //setSelectedTaxi(data[0])
    setSelectedTaxi(DATA[0])
  })*/

   requestRide = () =>{ 
     let obj = selectedTaxi;
     obj.nbrePeople = selectedPeople;
     obj.prixTotal = prixTotal;
     obj.bid= bid

     console.log(obj);
     setTimeout(function(){setMatchingDriver(true); }, 1500); //AUTOMATIC TO BE CHANGED
     setTimeout(function(){setMatchingDriver(false);  setDriverMatched(true)}, 3000);
   }

    const ViewPrice = (item) =>{
      return (
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <Image source={imageKeys.greenfilledcheck} style={{marginRight:5}}/>
          <View >
            <Text style={{fontSize:16,color:'#000000',fontFamily:fontKeys.MR}}>
              {item.taxiType? item.taxiType: 'Taxi'} 
            </Text>
            <Text  style={{fontSize:12,color:'#878787',fontFamily:fontKeys.MR}}>
              {selectedPeople >1 ? selectedPeople + ' People':  selectedPeople + ' Person'}
            </Text>
          </View>
         </View>
      )
    }

    const Item = ({ item }) => (
      <Pressable onPress={ ()=>  {setSelectedTaxi(item); setPrixUnitaire(item.pu); setPrixTotal(selectedPeople * item.pu) }}>
       {item.id === selectedTaxi?.id ? < PriceMoto componentTopLeft={<ViewPrice item={item}/>} textBottomLeft={<MotoPicket/>} textTopRight={item.pu} 
                 style={{flex:1,alignItems:'center'}}
                 styleTopRight={{color:'#3F4D5F',marginBottom:50,fontSize:18,fontFamily:fontKeys.MR,}}
      /> : < PriceMoto textTopLeft={item.taxiType}  textBottomLeft={selectedPeople >1 ? selectedPeople + ' People':  selectedPeople + ' Person'}  textTopRight={item.pu}  /> } 
      </Pressable>
      
    );
    
    const renderItem = ({ item }) => (
      <Item item={item} />
    );


     setVisibleFunc = () =>  setModalVisible(!modalVisible);
     
     getTextInput = (val) =>  {
                                setInput (val);
                                val.length >0 ? setIsSearching(true) : setIsSearching(false);
                            }

    /*
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

    */
   //BottomRightComponent
//rider select size



if (driverMatched) return <RideDetailsScreen />
//useEffect or function to match the driver..... 
if (matchingDriver) return (
  <MatchDriverScreen/>
);
  return (
        <SafeAreaView  style={{flex:1}}>
        <ScrollView  style={{flex:1,paddingHorizontal:22,}}>
            <TaxiImageText image={imageKeys.taxisearch} text={textKeys.rider.select.size}  
            style={{
              flex:1,
                marginLeft:20,borderBottomColor:'#EAEAEA',borderBottomStyle:'solid',
                borderBottomWidth:1,width:'100%',
                alignSelf:'center',
                shadowColor: 'red',//'rgba(170,170,170,0.5)',
                shadowOffset:{width:0,height:2},
                shadowOpacity:0,
                shadowRadius:22,
                paddingBottom:0
            }}
            textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:18}}
            />

             <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
              <Text> Nombre de Personne(s)</Text>
              <Picker
                style={{flex:1}}
                selectedValue={selectedPeople}
                onValueChange={ (itemValue, itemIndex) =>
                  {setSelectedPeople(itemValue);
                  setPrixTotal(itemValue * prixUnitaire)
                } 
              }>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
            </Picker>
          </View>

          <View style={{flex:1,borderColor:'#EAEAEA',borderTopWidth:1,borderStyle:'solid',borderBottomWidth:1,}}>
              <View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />

               </View>

                <View style={{flex:1,borderStyle:'solid',borderColor:'#EAEAEA',borderBottomWidth:1}}>
                   <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingTop:26,paddingBottom:21}}>
                      <TaxiText text={ textKeys.rider.select.estimate} styleText={{flex:1,fontFamily:fontKeys.MB,color:'#000000',fontSize:18}} />
                      <TaxiText text= { prixTotal + " F CFA"} styleText={{flex:1,color:'#000000',fontSize:18,fontFamily:fontKeys.MB}} />
                   </View>
                   <View style={{flex:1}}>
                        <TaxiText  text={textKeys.rider.select.hurry} style={{flex:1,marginBottom:20}} styleText={{flex:1,fontFamily:fontKeys.MR,color:'#878787',fontSize:14,flexWrap:'wrap'}} />
                        
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:19}}>
                            <TaxiTextInput keyboardType='numeric' style={{flex:1, marginBottom:0,marginLeft:0,marginRight:0}} styleText={{flex:1,fontFamily:fontKeys.MR,color:'#878787',fontSize:14}} placeholder={'enter amount here'} func={bidding}
                              value={prixTotal +""}
                            />
                            <View style={{flex:1,justifyContent:'center'}}>
                              <Text style={{color:'#F2B84D',fontSize:14,fontFamily:fontKeys.MB}}> Franc CFA </Text>
                            </View>
                           
                        </View>
                   </View>
                </View>
           
          </View>
          <View style={{marginBottom:19,paddingTop:18}}>
            <Text style={{color:'red'}}> Mesomb solution here to be integrated today ... Verifier le paiment avant d'activer le bouton pour eviter les requetes inutiles </Text>
          </View>
          <TaxiButton  text={textKeys.rider.select.request} style={{marginBottom:31}} func={requestRide}/>
        </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  //  alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
  // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'space-evenly',
   
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInfo:{
    textAlign:'center',
    color:'#000000',
    fontFamily:fontKeys.MR,
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:16,
    paddingTop:16,
    fontSize:18,
}
});

export default SelectTaxiTypeScreen;