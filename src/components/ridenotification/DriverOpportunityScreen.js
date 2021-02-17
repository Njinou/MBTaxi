import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,ScrollView } from "react-native";

import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';

import TaxiImageText  from '../common/TaxiImageText';

const DriverOpportunityScreen = () => {


    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
      );
    
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

            <View style={styles.centeredView1}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello MBOUENDEU!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
            <TaxiButton text={textKeys.end}  style={{margin:50,justifyContent:'flex-end'}} textStyle={{color:'#3E3E39',fontFamily:fontKeys.MSB,fontSize:18}} />
            <View style={styles.centeredView1}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello MBOUENDEU!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.centeredView1}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello MBOUENDEU!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
       
      </Modal>


      </ScrollView>

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
    //justifyContent: "center",
   // alignItems: "center",
    marginBottom: 24,
    marginTop:22,
  },
  centeredView1: {
    flex: 1,
    justifyContent: "flex-end",
   // alignItems: "center",
    marginBottom: 24,
    marginTop:22,
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