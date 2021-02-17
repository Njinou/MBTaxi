import React, { useState } from "react";
import {  StyleSheet, Text, Pressable, View } from "react-native";

import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';

import TaxiImageText  from '../common/TaxiImageText';
import HomeScreen from '../home/HomeScreen';

const ModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>

                <TaxiText styleText={styles.modalText,{fontFamily:fontKeys.MB,color:'#000000',fontSize:14}} text={textKeys.driverOpportunity +  " " +"Airport" +" " + textKeys.from + " " +'3:00'+ " " + textKeys.am + " "+ textKeys.to + "" +'5:00' + " " +textKeys.pm}/>
                <TaxiText styleText={styles.modalText,{fontFamily:fontKeys.MR,color:'#000000',fontSize:14}} text={textKeys.opportunityMessage}/>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        </View>);

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
   // alignItems: "center",
    marginTop: 22,
    paddingTop:20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
    textAlign: "center",
  }
});

export default ModalComponent;