import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';
import SignupScreen from './screens/signup';

const Stack = createStackNavigator();
export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
}