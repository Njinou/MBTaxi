/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
    View,Image,StyleSheet,Pressable
} from 'react-native';



import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'
import TaxiText from  '../common/TaxiText';

import TaxiImageText  from '../common/TaxiImageText';
//ratefilled
//StarCopy5
//set the number of star rated...
const Rate: () => React$Node = (props) => {
    const [star,setStar] = useState(0);
    const number = [1,2,3,4,5];

  return (
    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}> 
    { number.map( x => {
        return <Pressable key={x} onPress={()=> {setStar(x);
        console.log("Etoile " + x)
        }}>
        <Image   source={star >=x ? imageKeys.ratefilled : imageKeys.StarCopy5 } />
        </Pressable>
        })
    }   
    </View>
  );
};

const styles = StyleSheet.create({
 

});

export default Rate;
