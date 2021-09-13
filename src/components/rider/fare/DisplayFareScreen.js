import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView,FlatList } from "react-native";

import fontKeys from '../../../keyText/fontKeys';
import textKeys from '../../../keyText/textKeys';
import TaxiTextInput from '../../common/TaxiTextInput';
import TaxiText from  '../../common/TaxiText';
import TaxiImageText from '../../common/TaxiImageText';
import auth from '@react-native-firebase/auth';

import Rate from '../../rate/Rate';
import imageKeys from "../../../keyText/imageKeys";

import DisplayFareSplittedScreen from './DisplayFareSplittedScreen';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    displayName: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    displayName: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    displayName: 'Third Item',
  },
];


const DisplayFareScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [isSearching,setIsSearching] = useState(false); 
     const [input,setInput] = useState(null); 
     const [data,SetData] = useState(DATA);
     const [intialData,SetInitialData] = useState(DATA); //CHANGER CETTE VALEUR SI LES DONNEES CHANGENT MEME DANS UN USEFFECT...
     const [copayer,setCopayer] = useState([
        auth().currentUser
     ]); //useState([]);
     const [isaddingCcopayer,setIsAddingCopayer] = useState(true);
     const [cherching,setCherching] = useState(false);
     const [displayFareSplit,setDisplayFareSplit] = useState(false);
     setVisibleFunc = () =>  setModalVisible(!modalVisible);
     addPayerFunc = () => setIsAddingCopayer(true);
     //closingModal =() => setCherching(false);
     getTextInput = (val) =>  {
        setInput (val);
       // val.length >0 ? setIsSearching(true) : setIsSearching(false);  
        setCherching(true); 
        let text = val.toLowerCase()
        
        let filteredName = intialData.filter((item) => {
          return item.displayName.toLowerCase().match(text)
        })
        if (!text || text === '') {
          //setIsAddingCopayer(false);
          SetData(intialData);
        } else if (!Array.isArray(filteredName) && !filteredName.length) {
          console.log('Empty Array');
          SetData([]);
         // setIsAddingCopayer(false);
        } else if (Array.isArray(filteredName)) {
          console.log('filteredName',filteredName);
          SetData(filteredName);
        }
    }
    selectingCoPayer =(item)=>{
      let obj =copayer;
      obj.push(item);
      setCopayer(obj);
      //console.log("inside ",item)
      props.gettingCopayer(obj);

      setInput(item.displayName);
     // setTimeout ( () =>setCopayer(item),500);
     //  setTimeout ( () =>console.log("copaying... shit...."),500);
      setCherching(false);
      setIsAddingCopayer(false);
 }  
  const Item = ({ item }) => (
    <TaxiImageText  func ={()=>selectingCoPayer(item)} image={imageKeys.smallprofileblack} text={item.displayName} />
  );
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
 
  //if (copayer) return <DisplayFareSplittedScreen modalVisible={true}/>;
  //double check the items are not doubled ..
  //select the amount ..
  //split the amount among users.... by default 
  //select the amount per user.... 
  //let each user select his amount... 
  // when requesting ride taking in consideration the fact that 2 people or more might want to go in the same cab  or request each a cab ..
  //leur proposer deux taxi differents...
  //prendre l'itineraire ou l'emploi de temps et les horaires et  appeler des taxi des kils sont pret ou avant... pour kil nattendent pas.... 
  // leur envoyer des notifications pour leur faire savoir kil ya des taxi ki vont dans leur zone.... et pour gagner en temps ils peuvent les appeler ... 
  console.log('ride details inside simple .... ',props.rideDetails?.prixTotal);
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      > 
      {isaddingCcopayer ? 
        <View style={styles.centeredView}>
          <View style={[styles.modalView,]}>
             
                <View 
                    style={{ 
                        borderBottomStyle:'solid',
                        borderBottomColor:'#EAEAEA',
                        borderBottomWidth:1,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Text style={styles.textInfo}> {textKeys.rider.fare.split.info}</Text>
                </View>

                <View 
                    style={{ 
                        alignSelf:'flex-start',
                        alignSelf:'center',
                        justifyContent:'center',
                        paddingTop:30, 
                        paddingBottom:30,
                    }}
                >
                    <Text>
                        <Text style={[styles.textInfo,{fontSize:24}]}>{textKeys.rider.fare.split.price}</Text>
                        <Text style={[styles.textInfo,{fontSize:24,fontFamily:fontKeys.MB}]}> {props.rideDetails.prixTotal + "F"}</Text>
                    </Text>
                   
              </View>
            <View>
                <TaxiTextInput placeholder={textKeys.rider.fare.split.username} func={getTextInput}  value={input} style={{borderStyle:'solid',borderColor:'#DBDBDB'}}/>
                <TaxiText text="Annuler"  styleText={{color:'#000000',fontSize:16,fontFamily:fontKeys.MB}} func={props.closingSplitPaymentModal} />
             </View>
             {cherching ?
                
                <ScrollView  style={{marginTop:-26,}} contentContainerStyle={[styles.modalView,{justifyContent:'flex-start',marginRight:38,marginLeft:38,borderRadius: 0,borderBottomLeftRadius:8,borderBottomRightRadius:8}]}>
                  <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />
                </ScrollView>  : null}
            </View>
        </View> : <DisplayFareSplittedScreen copayer={copayer}  func={addPayerFunc} closingModal={props.closingModal}  rideDetails={props.rideDetails}/>}

      </Modal>
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

export default DisplayFareScreen;