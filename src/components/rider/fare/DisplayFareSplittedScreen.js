import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView,FlatList } from "react-native";

import fontKeys from '../../../keyText/fontKeys';
import textKeys from '../../../keyText/textKeys';
import TaxiTextInput from '../../common/TaxiTextInput';
import TaxiText from  '../../common/TaxiText';
import TaxiImageText from '../../common/TaxiImageText';

import Rate from '../../rate/Rate';
import imageKeys from "../../../keyText/imageKeys";

import ModalText from '../../common/ModalText';
import RideHistoryBlock from '../history/RideHistoryBlock';
import TaxiText12Row from '../../common/TaxiText12Row';


const DisplayFareSplittedScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isSearching,setIsSearching] = useState(false); 
    const [input,setInput] = useState(null); 
    const [copayer,setCopayer] = useState(props.copayer);
    const [prixTotal,setPrixTotal] = useState(props.rideDetails?.prixTotal  ?props.rideDetails?.prixTotal:0);
    const [pu,setPu] = useState(props.rideDetails?.prixTotal/copayer.length ? (props.rideDetails?.prixTotal/copayer.length).toFixed(2) :0);
    setVisibleFunc = () =>  setModalVisible(!modalVisible);
     getTextInput = (val) =>  {
        setInput (val);
        val.length >0 ? setIsSearching(true) : setIsSearching(false);
    }
    const Item = ({ item }) => (
      <View style={styles.item}>
        <TaxiText12Row   textTopLeft={item.displayName}  textTopLeftStyle={{fontSize:16,color:'#000000'}} 
        textTopRight="1000 FCFA" style={{borderWidth:0}}
         RightComponent={<TaxiText  styleText={{color:'#000000',fontSize:16,fontFamily:fontKeys.MB,paddingTop:11,paddingBottom:11,paddingRight:15,paddingLeft:15}} 
        style={{alignSelf:'flex-start',borderColor:'#DBDBDB',borderWidth:1.5,borderStyle:'solid'}} text={ pu + " F. CFA"}/>}/>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item item={item} />
    );

    console.log('ride details inside Splitted',(props.rideDetails?.prixTotal/3).toFixed(2));
  return (
          <ScrollView  contentContainerStyle={[styles.modalView,]}>
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
                        paddingBottom:84,
                        borderBottomStyle:'solid',
                        borderBottomColor:'#EAEAEA',
                        borderBottomWidth:1,
                    }}
                >
                    <Text>
                        <Text style={[styles.textInfo,{fontSize:24}]}>{textKeys.rider.fare.split.price}</Text>
                        <Text style={[styles.textInfo,{fontSize:24,fontFamily:fontKeys.MB}]}> {prixTotal}</Text>
                    </Text>
                   
              </View>
                <View style={{paddingBottom:20.5}}>
                    <FlatList
                      data={copayer}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
                </View>
                <TaxiImageText func={props.func} image={imageKeys.plusgreen} style={{alignSelf:'flex-start'}} textStyle={{color:'#5BE39B',fontSize:14,fontFamily:fontKeys.MR}} text={textKeys.rider.fare.split.addPerson}/>
                
                <View style={{backgroundColor:'#222222',marginTop:'auto',padding:30,margin:-36,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                    <TaxiText text={textKeys.rider.fare.split.split} styleText={{color:'#FFFFFF',fontSize:14,fontFamily:fontKeys.MMR,textShadowColor:'rgba(4,80,110,0.5)',textShadowOffset:{width:1,height:1},textShadowRadius:1}}/>
                </View>
            </ScrollView>
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
    marginTop:'auto',
    marginBottom:'auto',  
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

export default DisplayFareSplittedScreen;