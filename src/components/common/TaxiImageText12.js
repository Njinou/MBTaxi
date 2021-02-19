import React from 'react';
import {StyleSheet,Image,View,Text} from 'react-native';
import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';
import TaxiText from './TaxiText';

const TaxiImageText12= (props) =>{
    return (
        <View style={props.style? [styles.container,props.style] : styles.container}> 
             <Image  style={props.imageStyle? [styles.image,props.imageStyle]  :styles.image} source={ props.image? props.image: imageKeys.profile} />
             <Text style={{color:'red',alignSelf:'center'}}> ADdsakjnasdakjndaskdasdads</Text>
             <View style={{alignSelf:'flex-end'}}>
                 <Text style={{color:'rebeccapurple'}}> ,alignSelf:'center'</Text>
                 <Text style={{color:'rebeccapurple'}}> ,alignSelf:'center' ??????????????????????</Text>
             </View>
             <View style={{marginTop:'auto',}}>
                <TaxiText styleText={props.textStyleStart? [styles.textStart,props.textStyleStart]  : styles.textStart} text={props.textStart? props.textStart:"John Smith"}/>
                <TaxiText styleText={props.textStyleEnd? [styles.textEnd,props.textStyleEnd]  : styles.textEnd} text={props.textEnd? props.textEnd:"John Smith"}/>
             </View>
            
        </View>
       
    )
}
export default TaxiImageText12;

const styles = StyleSheet.create({
   container:{
       alignItems:'flex-start',
       flexDirection:'row',
       //alignItems:'center',
       paddingBottom:10,
    },
    image:{
        marginLeft:21,
        marginRight:21,
        alignSelf:'center'
    },
    textStart:{
        color:'#3F4D5F',
        fontSize:15,
        marginBottom: 10,
        textAlign:'center'
    },
    textEnd:{
        color:'#3F4D5F',
        fontSize:15
    }
});
