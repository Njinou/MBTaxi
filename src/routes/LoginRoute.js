
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../components/signUp/SignUp';
import LoginScreen from '../components/login/LoginScreen';


const Stack = createStackNavigator();
//{props => <HomeScreen {...props} extraData={someData} />}
function LoginRoute() {
  return (
    <Stack.Navigator initialRouteName="login">
    <Stack.Screen name="login" component={LoginScreen}  options={{ title: 'Login' }}/>
    <Stack.Screen name="signup" component={SignUp}  options={{ title: 'SignUp' }}/>
  </Stack.Navigator>
  );
}

export default LoginRoute;
