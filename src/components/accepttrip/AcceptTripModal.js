//,borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'#DBDBDB',
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';

import TaxiImageText  from '../common/TaxiImageText';


const AcceptTripModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
          <View style={styles.modalView}>
                <View style={{height:95,flexDirection:'row',justifyContent:'space-between',borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'#DBDBDB',marginBottom:'auto'}}> 
                    <View style={{justifyContent:'space-around',paddingLeft:18}}>
                        <TaxiText styleText={{color:'#000000',fontWeight:'bold',fontSize:13}} text={textKeys.menu.earnings}/>
                        <TaxiText styleText={{color:'#000000',fontSize:18}} text={'$' + '400'}/>
                    </View>
                    <TaxiButton 
                        style={styles.cashButton} 
                        textStyle={styles.cashOut} 
                        text={textKeys.menu.cashOut}
                    />
                </View>

                <View style={{height:95,flexDirection:'row',justifyContent:'space-between',borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'#DBDBDB',marginBottom:'auto'}}> 
                    <View style={{justifyContent:'space-around',paddingLeft:18}}>
                        <TaxiText styleText={{color:'#000000',fontWeight:'bold',fontSize:13}} text={textKeys.menu.earnings}/>
                        <TaxiText styleText={{color:'#000000',fontSize:18}} text={'$' + '400'}/>
                    </View>
                    <TaxiButton 
                        style={styles.cashButton} 
                        textStyle={styles.cashOut} 
                        text={textKeys.menu.cashOut}
                    />
                </View>

                <View style={{height:95,flexDirection:'row',justifyContent:'space-between',borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'#DBDBDB',marginBottom:'auto'}}> 
                    <View style={{justifyContent:'space-around',paddingLeft:18}}>
                        <TaxiText styleText={{color:'#000000',fontWeight:'bold',fontSize:13}} text={textKeys.menu.earnings}/>
                        <TaxiText styleText={{color:'#000000',fontSize:18}} text={'$' + '400'}/>
                    </View>
                    <TaxiButton 
                        style={styles.cashButton} 
                        textStyle={styles.cashOut} 
                        text={textKeys.menu.cashOut}
                    />
                </View>
                

                <View style={{height:95,flexDirection:'row',justifyContent:'space-between',borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'#DBDBDB',marginBottom:'auto'}}> 
                    <TaxiButton 
                        style={styles.cashButton} 
                        textStyle={styles.cashOut} 
                        text={textKeys.menu.cashOut}
                    />
                    <TaxiButton 
                        style={styles.cashButton} 
                        textStyle={styles.cashOut} 
                        text={textKeys.accept}
                    />
                </View>

                <Pressable
                        style={[styles.button, styles.buttonClose,{marginTop:20}]}
                         onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
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
  },
  cashButton:{
    backgroundColor:'#18BEAE',
    borderRadius:4.09, 
    shadowColor: '#18BEAE',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 2,  
    elevation: 5,
},
cashOut:{
    color:'white',
    fontSize:22,
    fontFamily:fontKeys.MSB,
    textShadowColor: 'rgba(4,80,110,0.5)', 
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,    
    paddingLeft:25,
    paddingRight:25
},
image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf:'stretch'
  },
});

export default AcceptTripModal;