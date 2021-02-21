import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

import SmallStarComponent from '../../rate/SmallStarComponent';
import TaxiImageText12 from '../../common/TaxiImageText12';
import fontKeys from '../../../keyText/fontKeys';
import RideHistoryBlock from './RideHistoryBlock';

const RideHistoryComponent = (props) => {
    return (
        <ScrollView  style={{height:'100%',backgroundColor:'white'}}>
        
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
        <RideHistoryBlock  textTopLeft="Top Left"  textTopRight="1000 FCFA" textBottomLeft="Mbouendeu Taxi"/>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    topText:{
        color:'#000000',fontFamily:fontKeys.MR,fontSize:14
    },
  });

export default RideHistoryComponent;
              