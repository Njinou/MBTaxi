import React,{useEffect,useState} from 'react';
import {View,Text,SafeAreaView,Button} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function SavedScreen() {

  const [user,setUser] = useState (auth().currentUser);
  var url = '/users/' + auth().currentUser.uid;

  const reference = database().ref(url);
  
  useEffect (()=>{
    reference.set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.log('Data set.'));
    /*reference
    .on('value', snapshot => {
      console.log('snapshot',snapshot);
        if (snapshot.exists()) {
            // Exist! Do whatever.
            
        console.log("les talibans")
        console.log('User data: ', snapshot.val());
        } else {
            // Don't exist! Do something.
            console.log("does not exists has to be")
        }
        
});*/
  },[])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
            Saved places!!!!! component to ve developped
      </Text>
      <Button onPress={() =>{
          reference.child('saved').set({
            username: 'name',
            email: 'email',
            profile_picture : 'imageUrl'
          }).then(() => console.log('Data set. CHECK THE CONSOLE...'))
          .catch  (error => console.log('error',error));
      }} title="testing" />
    </SafeAreaView>
  );
}