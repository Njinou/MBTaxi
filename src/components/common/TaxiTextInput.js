import React from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';
import fontKeys from '../../keyText/fontKeys';

const TaxiTextInput = (props) =>{
    const [value, onChangeTexte] = React.useState('');
    const getInput = input => onChangeTexte(input);

    return (
        <TextInput
            secureTextEntry={props.secureTextEntry?props.secureTextEntry:false}
            placeholder= {props.placeholder? props.placeholder:'enter the text here'}
            placeholderTextColor= 'blue'
            style={props.style? [styles.input,props.style]: [styles.input,{ marginLeft:'14%', marginRight:'14%'}]}
            keyboardType={props.keyboardType? props.keyboardType: null}
            onChangeText={props.func? props.func: getInput}
            value={props.value?props.value: value}
        />
    )

}
export default TaxiTextInput;

const styles = StyleSheet.create({
    input:{ 
        height: 40, 
        borderColor: 'gray',
        borderWidth: 1 ,
        alignSelf:'stretch',
        borderRadius:3,
        marginBottom:16,
        fontFamily:  fontKeys.MR,
        paddingLeft:11,
        color:'#3F4D5F',
        fontSize:12,
        marginLeft:36,
        marginRight:36,
        backgroundColor:'white',
    }
});
