import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,ScrollView } from "react-native";

import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';

import TaxiImageText  from '../common/TaxiImageText';
import HomeScreen from '../home/HomeScreen';
import ModalComponent from '../common/ModalComponent';

const ScrollOpportunity = () =>{
    return (
        <View style={{flexDirection:'column'}} contentContainerStyle={{flexDirection:'row'}}>
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />

                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                <ModalComponent />
                
        </View>
    );
}

const DriverOpportunityScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <HomeScreen color1= "#ED5A4D"  textColor1="white" color2="white" textColor2="#58585C" offline={true} Component={<ScrollOpportunity />}/>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    textAlign: "center"
  }
});

export default DriverOpportunityScreen;