import React from 'react';
import {Image,StyleSheet} from 'react-native';
import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

const SignUp = (props) =>{
    return (
        <Image source={imageKeys.upload} />
    )
}
export default SignUp;

const styles = StyleSheet.create({
    container:{ 
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    text:{
        color:'#F2B84D',
        fontSize:12,
        fontFamily:fontKeys.MSB
    }
});
