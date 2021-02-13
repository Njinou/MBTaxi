import React,{useState,useEffect,useRef} from 'react';
import {Image,StyleSheet,View,Dimensions,useWindowDimensions,Text, ScrollView} from 'react-native';
import fontKeys from '../../keyText/fontKeys';
import imageKeys from '../../keyText/imageKeys';

import textKeys from '../../keyText/textKeys';

import TaxiButton from '../common/TaxiButton'
import TaxiTextInput from '../common/TaxiTextInput'

const SignUp = (props) =>{

    const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [isportrait,setIsPortrait] = useState(windowWidth <= windowHeight);

  useEffect(() => {
    Dimensions.addEventListener("change", function(ecran) {
       setIsPortrait(ecran.screen.width <=  ecran.screen.height);
     });
  }, []);

    return (
        <ScrollView style={{alignSelf:'stretch',}} contentContainerStyle={{alignItems:'center',paddingBottom:54}} >  
         <View style={{alignSelf:'stretch',alignItems:'center'}}>
       
        <Text style={{color:'red',fontSize:22,marginBottom:10,fontFamily:fontKeys.MEBI,color:'#F2B84D',marginTop:10,
          textShadowColor: 'rgba(4,80,110,0.5)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 5
        }}> {textKeys.taxiDriver} </Text>

            <Image style={{marginBottom:32,marginTop:49}} source={imageKeys.upload} />
            <TaxiTextInput  placeholder={textKeys.fullName}/>
            <TaxiTextInput  placeholder={textKeys.phoneNumber}/>
            <TaxiTextInput  placeholder={textKeys.email}/>
            <TaxiTextInput  placeholder={textKeys.signup.createUsername}/>
            <TaxiTextInput  placeholder={textKeys.password}/>
            <TaxiTextInput  placeholder={textKeys.signup.confirmPassword}/>
            <TaxiButton  text={textKeys.create}/>
       </View>
        </ScrollView>       
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
