import{NavigationContainer}from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash/index';
import * as React from 'react';


import MainScreen from '../screens/main/Main';
import Card from '../screens/Card';
import SignUp from '../screens/main/signup';
import LogIn from '../screens/Loginscreen'

const Stack= createNativeStackNavigator();

export default function Navigate(){
    return(
        <NavigationContainer>
          <Stack.Navigator>
        
          <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='loginScreen' component={LogIn}></Stack.Screen>
          <Stack.Screen name='SignupScreen' component={SignUp}></Stack.Screen>
          <Stack.Screen name='Main' component={MainScreen}></Stack.Screen>
          <Stack.Screen name='Card' component={Card}></Stack.Screen>
          
          </Stack.Navigator>
          
        </NavigationContainer>
        

    )
}