import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView,Image } from "react-native";

import fontKeys from '../../../keyText/fontKeys';
import textKeys from '../../../keyText/textKeys';
import TaxiTextInput from '../../common/TaxiTextInput';
import TaxiText from  '../../common/TaxiText';
import TaxiImageText from '../../common/TaxiImageText';
import TaxiText12Row from '../../common/TaxiText12Row';

import Rate from '../../rate/Rate';
import imageKeys from "../../../keyText/imageKeys";

import RideHistoryBlock from '../history/RideHistoryBlock';

//select mobile ... #FAFAFA
const Automobile =()=> {
  return (
    <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',paddingLeft:22,paddingTop:29}}>
      <View style={{flex:1,flexDirection:'column'}}>
        <Text style={{color:'#000000',fontSize:16,fontFamily:fontKeys.MR}}> Hellooo </Text>
        <Text style={{paddingBottom:22,color:'#878787',fontSize:12,fontFamily:fontKeys.MR}}>  Hellooo </Text>
      </View>
      <View >
        <Text style={{flex:1,paddingRight:21,color:'#3F4D5F',fontSize:18,fontFamily:fontKeys.MR}}> Helloooo </Text>
      </View>
  </View>)
}
const SelectTaxiTypeScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [isSearching,setIsSearching] = useState(false); 
     const [input,setInput] = useState(null); 
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
const RenderText = () =>(
  <Text>
     
  </Text>
);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View  style={[{justifyContent:'center',flex:1}]}>
            <TaxiImageText image={imageKeys.taxisearch} text={textKeys.rider.select.size}  
            style={{
                marginLeft:-38,borderBottomColor:'#EAEAEA',borderBottomStyle:'solid',
                borderBottomWidth:1,width:'100%',
                paddingLeft:35,alignSelf:'center',
                shadowColor: 'red',//'rgba(170,170,170,0.5)',
                shadowOffset:{width:0,height:2},
                shadowOpacity:0,
                shadowRadius:22
            }}
            textStyle={{color:'#000000',fontFamily:fontKeys.MR,fontSize:18}}
            />
             <RideHistoryBlock  
             textTopRight={{fontSize:18}}
              textTopLeft={'Taxi'}  
              textTopRight={'$6'} 
              textBottomLeft={textKeys.rider.select.cheap} 
              BottomRightComponent={<RenderText/>}
              style={{borderColor:'color'}}
             />

          <View style={{flex:1,borderColor:'#EAEAEA',borderTopWidth:1,borderStyle:'solid',borderBottomWidth:1,}}>
            <Automobile/>
            <Automobile/>
            <Automobile/>

          </View>
              <Text style={{flex:1}}> Text Text </Text>
        </View>
      </Modal>
    </View>
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