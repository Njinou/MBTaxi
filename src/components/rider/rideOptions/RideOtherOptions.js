import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image } from "react-native";
import imageKeys from "../../../keyText/imageKeys";
import textKeys from "../../../keyText/textKeys";
import ModalText from '../../common/ModalText';

const RideOtherOptions = () => {
  const [modalVisible, setModalVisible] = useState(true);
   setModalFunc = () => setModalVisible(!modalVisible);
  return (
      <Modal
      supportedOrientations={['portrait', 'landscape']}
        style={{flexDirection:'row'}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
         
        <View style={{flexDirection:'row',alignItems:'center',height:'100%',justifyContent:'center',flexWrap:'wrap',marginTop:85}}>
            <ModalText text1={textKeys.rider.options.goBack} func={setModalFunc} Component={<Image source={imageKeys.backarrowlarge} style={{alignSelf:'flex-start'}}/>}/>
            <ModalText text1={textKeys.rider.options.course} text2={textKeys.rider.options.bookCourse} func={setModalFunc}/>
            <ModalText text1={textKeys.rider.options.schedule} text2={textKeys.rider.options.setTime} func={setModalFunc}/>
            <ModalText text1={textKeys.rider.options.subscribe} text2={textKeys.rider.options.monthSubscribe} func={setModalFunc}/>
        </View>

      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //flexDirection:'row'
  },
  modalView: {
    margin:5,
    backgroundColor: "white",
    borderRadius: 20,
    width: 152,
    height:152,
    //padding: 15,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding:18,
    justifyContent:'flex-start'
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
    textAlign: "left"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left"
  }
});

export default RideOtherOptions;