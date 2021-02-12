import React from 'react';
import {Text,StyleSheet,TouchableOpacity,View} from 'react-native';
import fontKeys from '../../keyText/fontKeys';

const TaxiButton= (props) =>{
    const [text, setText] = React.useState('Button');
    const pressed = () => console.log("clicked");

    return (
        <TouchableOpacity 
            onPress={props.func? props.func: pressed}
            >
            <View style={props.style? props.style: styles.button}>
                <Text style={props.text?props.text:styles.text}>  
                    {props.text? props.text: 'Log In ' } 
                </Text>
            </View>
        </TouchableOpacity>
    )

}
export default TaxiButton;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor:"#F2B84D",
        height:48,
        width:288,
        borderRadius:3,
        justifyContent: "center",
        marginTop:15,
      },
    text:{
        textAlign:'center',
        padding:14,
        fontSize:18,
        fontFamily: fontKeys.MSB,
        color:'#3E3E39',
        textShadowColor: 'rgba(4,80,110,0.5)',
         textShadowOffset: {width: 1, height: 1},
         textShadowRadius: 1
    },
});
