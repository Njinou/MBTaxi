import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import fontKeys from '../../../keyText/fontKeys';
import textKeys from '../../../keyText/textKeys';
import TaxiTextInput from '../../common/TaxiTextInput'
import TaxiText from  '../../common/TaxiText';

import Rate from '../../rate/Rate';

const DisplayFareScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
   setVisibleFunc = () =>  setModalVisible(!modalVisible);
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
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
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
                        <Text style={[styles.textInfo,{fontSize:24,fontFamily:fontKeys.MB}]}> $15</Text>
                    </Text>
                   
              </View>

            <TaxiTextInput placeholder={textKeys.rider.fare.split.username} style={{alignSelf:'stretch',marginBottom:54}}/>        
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
        
      </Pressable>
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

export default DisplayFareScreen;